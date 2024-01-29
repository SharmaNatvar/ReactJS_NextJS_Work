import React from "react";
import { dataBase } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(dataBase, email, password)
      .then((data) => {
        console.log(data?._tokenResponse.localId, "authData");
        localStorage.setItem('loginKey' , JSON.stringify(data?._tokenResponse.localId))
        navigate("/home");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <>
      <div className=" " >
      <h1 className="text-center">Login</h1>
      <div className="d-flex justify-content-center ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="enter email" name="email" />
        <br />
        <input type="text" placeholder="enter password" name="password" />
        <br />
        <p>create Account <span className="text-primary" onClick={()=>navigate('/singup')}>SingUp</span></p>
        <button>SignIn</button>
      </form>
      </div>
      </div>

    </>
  );
};

export default Login;
