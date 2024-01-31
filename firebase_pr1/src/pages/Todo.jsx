import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dataCollection } from "../FirebaseConfig";


const Todo = () => {
  const [inputData, setInputData] = useState();
  const [dataGet, setDataGet] = useState();
  const [show, setShow] = useState(false);
  // const navigate = useNavigate()

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const dataStore = collection(dataCollection, "todoList");

  useEffect(() => {
    const getFireBaseData = async () => {
      const data = await getDocs(dataStore);
      setDataGet(data.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFireBaseData();
  });

  const handleSumbit = async () => {
    await addDoc(dataStore, {
      topic: inputData.topic,
      message: inputData.message,
    });
    setInputData(undefined);
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(dataCollection, "todoList", id);
    await deleteDoc(deleteVal);
  };

  const handleEdit = async (e) => {
    console.log(e);
    setInputData(e);
    setShow(true);
  };

  const handleUpdate = async () => {
    const update = doc(dataCollection, "todoList", inputData.id);
    await updateDoc(update, {
      topic: inputData.topic,
      message: inputData.message,
    });
    setShow(false);
    setInputData(undefined);

  };

  return (
    <>
      <h1>Todo</h1>

      <div>
        <input
          type="text"
          value={inputData !== undefined ? inputData.topic : ""}
          name="topic"
          placeholder="enter your topic"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          value={inputData !== undefined ? inputData.message : ""}
          name="message"
          placeholder="enter topic detail"
          onChange={(e) => handleChange(e)}
        />
        {!show ? (
          <button onClick={handleSumbit}>Sumbit</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </div>
      <div>
        {dataGet?.map((e) => {
          return (
            <div className="box" key={e.id}>
              <h1>{e.topic}</h1>
              <h1>{e.message}</h1>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
              <button onClick={() => handleEdit(e)}>UpDate</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
