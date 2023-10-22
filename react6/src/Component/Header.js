import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return <>
    <nav>Get ready to Complete your goals here </nav>
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  </>;
}