import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { idPassDB } from "../fireBaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(idPassDB).then((res) => {
        console.log(res);
        localStorage.removeItem("loginKey");
        navigate("/");
    });
  };
  return (
    <>
<div className="nav_bg">
<h1>NavBar</h1>
      <ul>
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/todo"}>
          <li>Todo</li>
        </Link>
        <Link to={"/image"}>
          <li>Image</li>
        </Link>
      </ul>

<div>
      <button onClick={()=>navigate('/profile')}> profile</button>
<button onClick={handleLogOut}> LogOut</button>
</div>
</div>
    </>
  );
};

export default Navbar;
