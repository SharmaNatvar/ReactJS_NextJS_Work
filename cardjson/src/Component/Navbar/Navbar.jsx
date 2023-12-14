import React from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
            <ul>
                <Link to={'/'}>
                  <li>
                      <span text ='H' >H</span>
                      <span text ='O' >O</span>
                      <span text ='M' >M</span>
                      <span text ='E' >E</span>
                  </li>
                </Link>
                
                <Link to={'/Cards'}>
                  <li>
                      <span text ='C' >C</span>
                      <span text ='A' >A</span>
                      <span text ='R' >R</span>
                      <span text ='D' >D</span>
                      <span text ='S' >S</span>
                  </li>
                </Link>

                <Link to={'/Table'}>
                  <li>
                      <span text ='T' >T</span>
                      <span text ='A' >A</span>
                      <span text ='B' >B</span>
                      <span text ='L' >L</span>
                      <span text ='E' >E</span>
                  </li>
                </Link>

                <Link to={'/About'}>
                  <li>
                      <span text ='A' >A</span>
                      <span text ='B' >B</span>
                      <span text ='O' >O</span>
                      <span text ='U' >U</span>
                      <span text ='T' >T</span>
                  </li>
                </Link>
                <Link to={'Contact'}>
                  <li>
                      <span text ='C' >C</span>
                      <span text ='O' >O</span>
                      <span text ='N' >N</span>
                      <span text ='T' >T</span>
                      <span text ='A' >A</span>
                      <span text ='C' >C</span>
                      <span text ='T' >T</span>
                  </li>
                </Link>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
