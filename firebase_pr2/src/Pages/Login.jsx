import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { idPassDB } from "../fireBaseConfig";

const Login = () => {
    const navigate = useNavigate()
    const [inputData , setInputData] = useState({})

    const handleChange = (e) =>{
        setInputData({...inputData , [e.target.name] :e.target.value})
    }
    const handleSumbit = () =>{
        signInWithEmailAndPassword(idPassDB, inputData.email ,  inputData.password )
        .then(res=>{
            console.log(res,'log');
            alert('done')
            localStorage.setItem('loginKey' , JSON.stringify(res?._tokenResponse.localId))
            localStorage.setItem('loginEmail' , JSON.stringify(inputData.email))
            navigate('/home')
        })
    }


  return (
    <>
      <h1>hay login</h1>
      <div className="logIn_bg">
        <div className="login">
        <input type="email" placeholder="enter email" name='email' onChange={(e)=>handleChange(e)}/><br/>
          
          <input type="password" placeholder="enter password" name='password' onChange={(e)=>handleChange(e)}/>
            <button onClick={handleSumbit}> Sumbit</button>
          <p>Create Account <span onClick={()=>navigate('/singup')}>Click Here</span></p>
        </div>
      </div>
    </>
  );
};

export default Login;
