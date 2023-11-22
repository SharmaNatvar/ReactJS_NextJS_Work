import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className=" h2"> Finance </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link h5"> Home </a>
          <a className="nav-link h5"> Features </a>
          <a className="nav-link h5"> Pricing </a>
          <a className="nav-link h5"> Disabled </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
