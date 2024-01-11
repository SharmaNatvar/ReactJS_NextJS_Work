import React, { useState, useEffect } from 'react';

const CrudComponent = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Retrieve items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
    setItems(storedItems);
  }, []);

  const addItem = () => {
    if (itemName.trim() !== '' && itemDescription.trim() !== '') {
      // Create a new item and update the state
      const newItem = {
        name: itemName,
        description: itemDescription,
      };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);

      // Update local storage
      localStorage.setItem('crudItems', JSON.stringify(updatedItems));

      // Clear the input fields
      setItemName('');
      setItemDescription('');
    }
  };

  const editItem = (index) => {
    // Set the item to be edited in the input fields
    const itemToEdit = items[index];
    setItemName(itemToEdit.name);
    setItemDescription(itemToEdit.description);
    setEditingIndex(index);
  };

  const updateItem = () => {
    if (editingIndex !== null) {
      // Update the item at the editing index and clear the input fields
      const updatedItems = [...items];
      updatedItems[editingIndex] = { name: itemName, description: itemDescription };
      setItems(updatedItems);

      // Update local storage
      localStorage.setItem('crudItems', JSON.stringify(updatedItems));

      // Reset the editing state
      setEditingIndex(null);
      setItemName('');
      setItemDescription('');
    }
  };

  const deleteItem = (index) => {
    // Remove the item at the specified index and update the state
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);

    // Update local storage
    localStorage.setItem('crudItems', JSON.stringify(updatedItems));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.description}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>
      {editingIndex === null ? (
        <button onClick={addItem}>Add Item</button>
      ) : (
        <button onClick={updateItem}>Update Item</button>
      )}
    </div>
  );
};

export default CrudComponent;
