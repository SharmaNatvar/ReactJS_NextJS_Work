import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { idPassDB } from "../fireBaseConfig";

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout =() =>{
        signOut(idPassDB)
        localStorage.removeItem('loginEmail')
        navigate('/')
    }

  return (
    <>
      <div className="nav_bg">
        <h1>Navbar</h1>
        <ul>
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/memory"}>
            <li>Memory</li>
          </Link>
          <Link to={"/todo"}>
            <li>ToDo</li>
          </Link>
        </ul>
        <div className="btnGrp">
          <button onClick={()=>navigate('/userprofile')}>Profile</button>
          <button onClick={handleLogout}>Log-Out</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
