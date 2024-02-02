import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { txtDB } from "../fireBaseConfig";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const [inputData, setInputData] = useState();
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

//   send data to input File for update
  const handleEdit = (e) =>{
    console.log(e  ,'handle edit');
    setInputData(e)
    setShow(true)
  }
  console.log(inputData);

//   get data from fire base
  useEffect(() => {
    async function getFireData() {
      await getDocs(collection(txtDB, "todoList")).then((res) => {
        const result = res.docs?.map((val) => ({ ...val.data() , id:val.id}));
        setData(result);
      });
    }

    getFireData();
  },[]);


// sumbit data to fireBase
  const handleSumbit = async () => {
    await addDoc(collection(txtDB, "todoList"), {
      topicName: inputData.topicName,
      topicMessage: inputData.topicMessage,
      startTime: inputData.startTime,
      endTime: inputData.endTime,
    }).then((res) => {alert('done')});
  };

//   update data 
const handleUpdate = async() =>{
    await updateDoc(doc(txtDB, 'todoList' , inputData.id ),{
        topicName: inputData.topicName,
        topicMessage: inputData.topicMessage,
        startTime: inputData.startTime,
        endTime: inputData.endTime,
      })
      .then((res) => {alert('done');})
      setShow(false)
      setInputData(undefined)
}


// delete data
const handleDelete = async(id) =>{
    await deleteDoc(doc(txtDB , 'todoList' ,id))
    .then((res) => alert(res))

}

  return (
    <>
      <Navbar />
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="enter Topic"
        name="topicName"
        value={inputData !== undefined ? inputData.topicName : ''} 
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        placeholder="about topic"
        name="topicMessage"
        value={inputData !== undefined ? inputData.topicMessage : ''} 
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label> start Time : </label>
      <input type="time" name="startTime" value={inputData !== undefined ? inputData.startTime : ''} onChange={(e) => handleChange(e)} />
      <br />
      <label> end Time : </label>
      <input type="time" name="endTime" value={inputData !== undefined ? inputData.endTime : ''} onChange={(e) => handleChange(e)} />
      <br />
      {
        show === false ? 
      <button onClick={handleSumbit}>Sumbit</button>:
      <button onClick={handleUpdate}>update</button>
      }

      {data?.map((e) => {
        return (
          <div className="todoBox" key={e.id}>
            <h1>{e.topicName}</h1>
            <h2>{e.topicMessage}</h2>
            <div>
              <span>{e.startTime}</span>
              <span>{e.endTime}</span>
            </div>
            <div>
              <button onClick={()=>handleDelete(e.id)}>Delete</button>
              <button onClick={()=>handleEdit(e)}>edit</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ToDo;
