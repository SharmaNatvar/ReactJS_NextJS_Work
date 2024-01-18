import React, { useState } from "react";
import "./LoginSignup.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SignUp = () => {
  const navigate = useNavigate();

  //   const [action, setAction] = useState("Login");
  const [inputData, setInputData] = useState({});

  function getInput(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function submitData() {
    if (
      inputData.username !== undefined &&
      inputData.email !== undefined &&
      inputData.password !== undefined
    ) {
      const getLocal = JSON.parse(localStorage.getItem("login")) || [];
      console.log(getLocal);
      const newData = [...getLocal, inputData];
      localStorage.setItem("login", JSON.stringify(newData));

      setInputData(
        (inputData.username = ""),
        (inputData.email = ""),
        (inputData.password = ""),
        swal({
          title: "Good job!",
          //   text: "You clicked the button!",
          icon: "success",
          button: navigate("/"),
        })
      );
    } else {
      swal({
        title: "Enter Data",
        icon: "warning",
        //   button: "Aww yiss!",
      })
    }
  }

  return (
    <>
      <div className="container_bg">
        <div className="header">
          <p className="text">Sign Up</p>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <FaUser />
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={inputData.username || ""}
              onChange={getInput}
            />
          </div>
          <div className="input">
            <MdEmail />
            <input
              type="email"
              placeholder="User Email"
              name="email"
              value={inputData.email || ""}
              onChange={getInput}
            />
          </div>
          <div className="input">
            <RiLockPasswordFill />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputData.password || ""}
              onChange={getInput}
            />
          </div>
        </div>
        <div className="forgot_password">
          <p>
            Click here<span onClick={() => navigate("/")}> Login</span>
          </p>
        </div>
        <div className="submit_container">
          <button className={"sumbit "} onClick={submitData}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
