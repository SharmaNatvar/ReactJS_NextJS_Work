import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { idPassDB, txtDB } from "../fireBaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Singup = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});

  const txtStore = collection(txtDB, "userDetail");

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSumbit = () => {
    createUserWithEmailAndPassword(
      idPassDB,
      inputData.email,
      inputData.password
    ).then((res) => {
        handleTxtSumbit(res);
        console.log(res,'res');
      alert("singup done");
    }).catch(err => alert(err))
  };

  const handleTxtSumbit = async (res) => {
   if(res.operationType === 'signIn'){
    await addDoc(txtStore, {
        name: inputData.name,
        email: inputData.email,
        number: inputData.number,
        addharNumber: inputData.addharNumber,
        password: inputData.password,
      })
      .then(res => {console.log(res)
        navigate("/");
      
      })
   }else{
    alert('enter proper detail')
   }
  };

  return (
    <>
      <h1>Sing up</h1>
      <div className="singUp_bg">
        <div className="singUp">
          <input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="number"
            placeholder="enter number"
            name="number"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="number"
            placeholder="enter addhar Number"
            name="addharNumber"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSumbit}> Sumbit</button>
          <p>
            For Login <span onClick={() => navigate("/")}>Click Here</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Singup;
