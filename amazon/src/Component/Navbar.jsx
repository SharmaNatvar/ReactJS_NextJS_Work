import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbarBg">
          <div className="containerCustom">
            <div className="d-flex justify-content-between ">
              <div className="navbarCustom "> 
                <p><Link className='m-2' to="/">Home </Link></p>
                <p><Link className='m-2' to="/About">About</Link></p>
                <p><Link className='m-2' to="/Product">Product</Link></p>
                <p><Link className='m-2' to="/ApiCall">ApiCall</Link></p>
              </div>
              <span className="text-light"><i className="fas fa-cart-plus"></i></span>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
