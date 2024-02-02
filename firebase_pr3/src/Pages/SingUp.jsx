import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { idPassDB, txtDB } from "../fireBaseConfig";
import { addDoc, collection } from "firebase/firestore";

const SingUp = () => {
  const [inputData, setInputData] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSumbit = () => {
    createUserWithEmailAndPassword(
      idPassDB,
      inputData.userEmail,
      inputData.password
    ).then((res) => {
      console.log(res);
      handleSumbitData(res);
    }).catch((err)=>alert(err))
  };

  const handleSumbitData = async (res) => {
    if(res.operationType === 'signIn'){
        await addDoc(collection(txtDB, "userDeatial"), {
          userName: inputData.userName,
          userEmail: inputData.userEmail,
          number: inputData.number,
          addharNumber: inputData.addharNumber,
          address: inputData.address,
          password: inputData.password,
        }).then((res) => {
          console.log(res);
          alert('signUp done')
          navigate('/')
        }).catch(err=>alert(err))
    }else{
        alert('enter Invaild')
    }
  };

  return (
    <>
      <div className="sign_bg">
      <h1>SingUp</h1>
      <input
        type="text"
        name="userName"
        placeholder="enter Name"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="email"
        name="userEmail"
        placeholder="enter Email"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="number"
        name="number"
        placeholder="enter Number"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="number"
        name="addharNumber"
        placeholder="enter Addhar Number"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="address"
        placeholder="enter Address"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="enter password"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSumbit}>sumbit</button>
      <p>for Login <span onClick={()=>navigate('/')}>Click here</span> </p>
      </div>
    </>
  );
};

export default SingUp;
