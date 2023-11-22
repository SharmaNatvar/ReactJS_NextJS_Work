import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      

        <Link className='m-2' to="/">Home </Link>
        <Link className='m-2' to="/About">About</Link>
        <Link className='m-2' to="/Product">Product</Link>
    </>
  );
};

export default Navbar;
