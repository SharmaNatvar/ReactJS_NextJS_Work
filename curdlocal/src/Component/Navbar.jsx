import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand fs-2" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active px-2">
              <Link className="nav-link fs-4" to="/">
                Home{" "}
              </Link>
            </li>
            <button
              className="btn btn-secondary fs-5"
              onClick={() => navigate("/from")}
            >
              Regiter
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
