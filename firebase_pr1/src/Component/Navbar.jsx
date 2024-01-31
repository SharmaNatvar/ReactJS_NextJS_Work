import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("LoginKey");
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>Navbar</h1>
        <div>
          <ul>
            <Link to={"/home"}>
              <li>Home</li>
            </Link>
            <Link to={"/image"}>
              <li>Image</li>
            </Link>
            <Link to={"/todo"}>
              <li>Todo</li>
            </Link>
          </ul>
        </div>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </>
  );
};

export default Navbar;
