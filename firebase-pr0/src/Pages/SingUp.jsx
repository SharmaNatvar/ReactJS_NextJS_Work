import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { dataBase } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const SingUp = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value


        console.log(email , password);

        createUserWithEmailAndPassword(dataBase , email , password)
        .then((res)=>{console.log(res)
            navigate('/')
        })
        .catch((err)=>alert(err))
    }


    return (
        <>
            <div className="box_bg">
                <div className="box">
                    <h1>SignUp</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label style={{ textAlign: "start" }}>Email : </label>
                        <br />
                        <input type="email" name="email" placeholder="Enter email" />
                        <br />
                        <label>password : </label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                        />

                        <p>
                            Already account <span onClick={()=>navigate('/')}>Login here</span>
                        </p>
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SingUp;
