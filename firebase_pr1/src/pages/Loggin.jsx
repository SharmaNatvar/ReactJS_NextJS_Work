import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { singAuth } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'

const Loggin = () => {

    const navigate = useNavigate()

    const [inputData , setInputData] = useState()

const handleChange = (e) =>{
    setInputData({...inputData,[e.target.name]:e.target.value})
}

console.log(inputData);

const handleSumbit = () =>{
    if( inputData !== undefined){
        signInWithEmailAndPassword(singAuth , inputData.email , inputData.password)
        .then((res)=>{
            localStorage.setItem('LoginKey', JSON.stringify(res?._tokenResponse.localId))
            navigate('/home')
        })
    }else{
        alert("enter something");
    }
}

  return (
    <>
     <h1>login</h1> 


     
<input type='email'  name='email' placeholder='enter your email' onChange={(e)=>handleChange(e)}/><br/>
<input type='password'  name='password' placeholder='enter your password' onChange={(e)=>handleChange(e)}/>
<button onClick={handleSumbit}>Sumbit</button>
<p onClick={()=>navigate('/singup')}>create Account Click here</p>
    </>
  )
}

export default Loggin

