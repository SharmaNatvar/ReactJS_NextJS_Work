import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='navBar_bg'>
                <div className="navbar">
                    <h1>NavBar</h1>
                    <ul>
                        <Link to={'/home'}><li>Home</li></Link>
                        <Link to={'/image'}><li>Image</li></Link>
                        <Link to={'/todo'}><li>Todo</li></Link>
                    </ul>
                    <button
                        onClick={() => {
                            localStorage.removeItem("loginKey");
                            navigate("/");
                        }}
                    >
                        {" "}
                        logOut
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar
