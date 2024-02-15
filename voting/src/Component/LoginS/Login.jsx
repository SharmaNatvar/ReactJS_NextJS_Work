import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import axios from "axios";
import { BASE_URL, LOGIN_ENDPOINT } from "../../Redux-Saga/constant";

const Login = ({setLoginRole }) => {
  console.log();

  const [loginData, setLoginData] = useState({});
  const [txt, setTxt] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    // setLoginRole(txt === true ? 'User' : 'Admin')

    localStorage.setItem('loginRole',JSON.stringify(txt === true ? 'User' : 'Admin'))
  },[txt])
  
  const getInputData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  
  const handleSumbit = async() => {
    // dispatch({type:POST_LOGIN_PENDING, payload:loginData})
    // navigate("/home");
    await axios.post(BASE_URL+LOGIN_ENDPOINT,loginData)
    .then((res)=>{
        const data = res.data.data
        // console.warn(data);
        return data
    })
    .then((res)=>{
      const loginDetail = res
      console.log(loginDetail,'loginDetail');
      console.log(loginDetail.Role,'loginDetail.Role');
      localStorage.setItem('loginDetail',JSON.stringify(loginDetail))
      localStorage.setItem('loginKey',JSON.stringify(loginDetail.Role))
    })
    const login = JSON.parse(localStorage.getItem('loginDetail'))
    login ? navigate('/home'): navigate('/')
  };

  console.log(loginData);

  return (
    <>
      <div className="login_bg">
        <div className="login">
          <div className="login_txt">
            <h3>Voting App</h3>
            <p>Make Things Digital</p>
          </div>
          <div className="login_form">
            <div className="login_box">
              <h3 className="login_h3">
                Login As{" "}
                {txt !== true ? ` ${" Admin "}` : `${"User"}`}
              </h3>
              <p className="login_p">Indian Resident Elector</p>
              <div className="login_input">
                <label>
                  Enter{" "}
                  {txt !== true ? ` ${" Admin ID "}` : `${"User ID. "}`}
                </label>
                <br />
                  <input type="email" placeholder="Enter Your Email ID" name="Email" onChange={getInputData}/>
              </div>
              <div className="login_input">
                <label>Enter Password</label>
                <br />
                <input type="password" placeholder="Enter Your Password" name="Password" onChange={getInputData} />
              </div>
              <p
                className="login_para"
                onClick={() => setTxt(txt !== true ? true : false)}
              >
                Log as{" "}
                <span>
                  {" "}
                  {txt === true ? ` ${" Admin ?"}` : `${" User ?"}`}
                </span>
              </p>
              <p className="login_para" onClick={() => navigate("/signup")}>
                Create Your Account <span> Clich Here </span>
              </p>
              <div className="login_btn">
                <button onClick={handleSumbit}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
