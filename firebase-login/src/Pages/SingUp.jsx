import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../firebaseConfig";

const SingUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(dataBase, email, password)
      .then((data) => {
        console.log(data, "authData");
        navigate('/')
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <>
      <h1 className="text-center">Sing Up</h1>
      <div className="d-flex justify-content-center ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="enter email" name="email" />
          <br />
          <input type="text" placeholder="enter password" name="password" />
          <br />
          <p>
            already Account{" "}
            <span className="text-primary" onClick={() => navigate("/")}>
              Login
            </span>
          </p>
          <button>SignUp</button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
