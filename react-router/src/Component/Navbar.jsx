import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div >
            <Link className='m-2' to="/">Home </Link>
            <Link className='m-2' to="/About">About</Link>
            <Link className='m-2' to="/Contact">Contact</Link>
            <Link className='m-2' to="/testimonial">Testimonial</Link>
            {/* <Link className='m-2' to="/name">output</Link> */}
        </div>
    </>
  )
}

export default Navbar