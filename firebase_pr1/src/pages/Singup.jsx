import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { singAuth } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom';

const Singup = () => {

    const [inputData , setInputData] = useState();
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    console.log(inputData);

    const handleSumbit = () =>{
        if( inputData !== undefined){
            createUserWithEmailAndPassword(singAuth , inputData.email , inputData.password)
            .then((res)=>{
               alert(res)
               navigate('/')
            })
        }else{
            alert("enter something");
        }
    }

  return (
    <>
     <h1>Singup</h1> 

    <input type='email'  name='email' placeholder='enter your email' onChange={(e)=>handleChange(e)}/><br/>
    <input type='password'  name='password' placeholder='enter your password' onChange={(e)=>handleChange(e)}/>
<button onClick={handleSumbit}>Sumbit</button>
<p onClick={()=>navigate('/')}>Login click here</p>
    </>
  )
}

export default Singup
