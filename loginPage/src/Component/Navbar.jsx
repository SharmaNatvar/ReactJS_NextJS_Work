import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            Navbar
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/home">
                  About
                </Link>
              </li>
            </ul>
           <Link to={'/'}>
           <button class="btn btn-outline-secondary" type="submit">
              Login
            </button>
           </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
