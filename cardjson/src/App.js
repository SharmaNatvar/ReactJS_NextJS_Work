import React, { useState } from "react";
import Card from "./Component/Card";
import NameChange from "./Component/NameChange";
import books from "./json"

function App() {

  const [bookData, setBookData] = useState(books);

  function deleteCard(item) {
    let updatedData = bookData.filter(i => i.book != item.book)
    setBookData(updatedData)
  }

  function addBook(item) {
    if(item.fname && item.lname) {
      let newData = [...bookData, {book: item.fname, writer: item.lname}]
      setBookData(newData)
    } else {
      window.alert("give proper values!!")
    }
  }

  return (
    <>
          <NameChange
        addBookEntry={(item) => addBook(item)}
      />
      
      <Card
        books = {bookData}
        deleteCardData = {(item) => deleteCard(item)}
      />


    </>
  );
}

export default App;
