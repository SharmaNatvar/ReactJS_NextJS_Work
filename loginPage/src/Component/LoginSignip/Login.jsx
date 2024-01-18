import React, { useState } from "react";
import "./LoginSignup.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});

  function getInput(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  //   function submitData() {
  //     if (
  //       inputData.username !== undefined &&
  //       inputData.email !== undefined &&
  //       inputData.password !== undefined
  //     ) {
  //       const getLocal = JSON.parse(localStorage.getItem("login")) || [];
  //       console.log(getLocal);
  //       const newData = [...getLocal, inputData];
  //       localStorage.setItem("login", JSON.stringify(newData));

  //       setInputData(
  //         (inputData.username = ""),
  //         (inputData.email = ""),
  //         (inputData.password = "")
  //       );
  //     } else {
  //       alert("enter data");
  //     }
  //   }

  function loginData() {
    if (inputData.email !== undefined && inputData.password !== undefined) {
      const getLocal = JSON.parse(localStorage.getItem("login")) || [];
        // let value = false
      const dataEmail = getLocal.filter((e) => {
        return (
            e.email === inputData.email && e.password === inputData.password
            )
      });

      if(dataEmail[0].password === inputData.password && dataEmail[0].email === inputData.email ){
        swal({ 
          title: "Good job!",
          icon: "success",
          button: navigate("/home"),
        })
        localStorage.setItem('userLogin','true');
        localStorage.setItem('userData' , JSON.stringify(dataEmail))
      }else{
        swal({
        title: "Enter Data",
        icon: "warning",
      });
      }
    } else {
      swal({
        title: "Enter Data",
        icon: "warning",
      });
    }
  }

  return (
    <>
      <div className="container_bg">
        <div className="header">
          <p className="text">Login</p>
          <div className="underline"></div>
        </div>
        <div className="inputs">
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
          <p className="pe-2">
            Lost Password <span>Click here.</span>
          </p>
          <p>
            Click here <span onClick={() => navigate("/sign")}> Sign Up</span>
          </p>
        </div>

        <div className="submit_container">
          <button className={"sumbit"} onClick={loginData}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
