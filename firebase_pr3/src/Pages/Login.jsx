import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { idPassDB } from "../fireBaseConfig";

const Login = () => {
  const [inputData, setInputData] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSumbit = () => {
    signInWithEmailAndPassword(
      idPassDB,
      inputData.userEmail,
      inputData.password
    )
      .then((res) => {
        console.log(res);
        localStorage.setItem("loginEmail", JSON.stringify(inputData.userEmail));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  console.log(inputData, );

  const handleReset = () =>{
    sendPasswordResetEmail(idPassDB , inputData.userEmail)
    .then((res)=>{
        alert('check your email Box')
        // navigate('/')
        setShow(false)
    })
  }


  return (
    <>
      <div className="login_bg">
        <h1>{show === false ? "Login" : "Forget Password"}</h1>

        <input
          type="email"
          name="userEmail"
          placeholder="enter Email"
          onChange={(e) => handleChange(e)}
        />

        {show === false ? (
          <div>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              onChange={(e) => handleChange(e)}
            />

            <button onClick={handleSumbit}>sumbit</button>
          </div>
        ) : (
          <button onClick={handleReset}>result</button>
        )}
        <p>
          for SignUp <span onClick={() => navigate("/singup")}>Click here</span>{" "}
        </p>
        <p>
          {show === false ? "Forget password" : "for Login"}{" "}
          <span onClick={() => setShow(show === false ? true : false)}>
            Click here
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default Login;
