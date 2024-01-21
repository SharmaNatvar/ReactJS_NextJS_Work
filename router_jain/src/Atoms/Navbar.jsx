import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navbar_bg'>
            <div className='container'>
            <div className="navbar">
            <h1>Sharma</h1>
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
                <li><Link to={'/Help'}>Help</Link></li>
            </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar