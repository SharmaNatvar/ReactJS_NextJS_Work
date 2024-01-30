import React, { useState } from 'react'
import NavBar from '../Component/NavBar'
import { todoDataBase } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const ToDo = () => {

    const [input , setInput] = useState([])

    const getInputData = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    // console.log(input);

    const value = collection(todoDataBase , 'demo')
    const handleSumbit = async() =>{
        // todoDataBase
        await addDoc(value ,input)
    }




  return (
    <>
    <NavBar/>
     <h1>Todo </h1> 

<div className='todoBox_bg'>
    <div className='todoBox'>
        <input type='text' name='userName' placeholder='enter name' onChange={(e)=> getInputData(e)}/><br/>
        <input type='email' name='userEmail' placeholder='enter email' onChange={(e)=> getInputData(e)}/><br/>
        <input type='number' name='userNumber' placeholder='enter number' onChange={(e)=> getInputData(e)}/><br/>
        <input type='text' name='topic' placeholder='enter topic' onChange={(e)=> getInputData(e)}/><br/>
        <label>Start Time</label>
        <input type='time' name='startTime' onChange={(e)=> getInputData(e)}/>
        <input type='date' name='startDate' onChange={(e)=> getInputData(e)}/><br/>
        <label>End Time</label>
        <input type='time' name='endTime' onChange={(e)=> getInputData(e)}/>
        <input type='date' name='endDate' onChange={(e)=> getInputData(e)}/><br/>
        <input type='text' name='Task' placeholder='enter About Task' onChange={(e)=> getInputData(e)}/><br/>
        <button onClick={handleSumbit}>Submit</button>
    </div>
</div>

    </>
  )
}

export default ToDo
