import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <span><Link to='/'>Home</Link></span>
      <span> <Link to='/About'>About</Link></span>
      <span><Link to='/Contact'>Contact</Link></span>
      <span><Link to='/Todo'>Todo</Link></span>
    </>
  )
}

export default Navbar
