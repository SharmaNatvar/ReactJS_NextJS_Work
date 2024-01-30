import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { dataBase } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);
        signInWithEmailAndPassword(dataBase , email , password)
        .then((res)=>{
            // const loginKey = res?._tokenResponse.localId 
            localStorage.setItem("loginKey" , JSON.stringify(res?._tokenResponse.localId))
            // localStorage.setItem('loginKey' , JSON.stringify(res?._tokenResponse.localId ))
            navigate('/home')
        })
        .catch((err)=>alert(err))
    }

  return (
    <>
       <div className="box_bg">
                <div className="box">
                    <h1>Login</h1>
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
                            Create account <span onClick={()=>navigate('/register')}>SignUp here</span>
                        </p>
                        <button >Login</button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Login
