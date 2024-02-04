import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [txt, setTxt] = useState(false);
  const Name = useRef()
  const voting = useRef()
  const Password = useRef()
  const navigate = useNavigate();



  console.log(txt);

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
              <h3 className="login_h3">Login With {txt !== true ?` ${'Mobile no. '}`: `${'Voting ID. '}`}</h3>
              <p className="login_p" >Indian Resident Elector</p>
              <div className='login_input'>
                <label>Enter Name</label>
                <br />
                <input type="text" placeholder='Enter Your Name ' ref={Name} />
              </div>
              <div className='login_input'>
                <label>Enter {txt !== true ?` ${'Mobile no. '}`: `${'Voting ID. '}`}</label>
                <br />
                {
                    txt !== true ?<input type="number" placeholder='Enter Your Mobile no.' ref={voting} />: <input type="txt" placeholder='Enter Your Voting ID ' ref={voting} />
                }
                
                
              </div>
              <div className='login_input'>
                <label>Enter Password</label>
                <br />
                <input type="password" placeholder='Enter Your Password ' ref={Password} />
              </div>
              <p className="login_para" onClick={()=> setTxt(txt !== true ? true :false)} >Log In With <span> {txt === true ?` ${'Mobile no. ?'}`: `${'Voting ID. ?'}`}</span></p>
              <p className="login_para" onClick={()=>navigate('/signup')}>Create Your Account <span> Clich Here </span></p>
              <div className='login_btn'>
              <button  onClick={()=>navigate('/home')}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login