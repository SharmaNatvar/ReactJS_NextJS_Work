import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vote from "../../assets/vote.png";
import { navAdmin } from "../../Admin/NavBar/navAdmin";
import './navbar.css'
import { navUser } from "../../User/NavBar/navUser";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRightFromBracket, faCircleInfo, faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { toast } from 'react-toastify';
// import "";
const Navbar = () => {
  const navigate = useNavigate();
  const login = JSON.parse(localStorage.getItem('loginKey'))
  const Role = login
console.log(Role , 'r');
  function handleLogout(){
    localStorage.removeItem('loginKey')
    localStorage.removeItem('loginDetail')
    navigate('/')
  }

  return (
    <>
      <nav className="nav_bg">
        <div className="nav">
          <Link to="/Home">
            <img src={vote} className="vote_img" alt=" Logo" />
          </Link>

          <div className="nav_list">
            <ul className="nav_list_ul">
            {
              Role === 'Admin' || 'admin'?
              navAdmin.map((e)=>{
                 return <li className="nav_list_li" key={e.key}>
                <Link to={e.path}>{e.label}</Link>
              </li>
                })
              :
              navUser.map((e)=>{
                 return <li className="nav_list_li" key={e.key}>
                <Link to={e.path}>{e.label}</Link>
              </li>
                })
            }
            </ul>
              <button className="nav_btn" onClick={handleLogout}>Logout </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
