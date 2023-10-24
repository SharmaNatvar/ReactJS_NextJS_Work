import React from "react";
import logoImg from '../asstes/logo1.png'
import ButtonCom from "./ButtonCom";

const Navbar = () =>{
    return (
        <nav className=" ">
            {/* <!-- left side menu --> */}
            <div className="d-flex">
                <div class="left_side_menu">
                    <div class="logo">
                        <a href="#"><img src={logoImg} alt="logo image"/></a>
                    </div>
                </div>

                <div class="sub_menu d-flex">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About Us</li></a>
                    <a href="#"><li>Goals</li></a>
                    <a href="#"><li>Tips</li></a>
                </div>

                {/* <!-- right side menu --> */}
                <div class="right_side_button">
                    <div class="sub_menu">
                        <ButtonCom nameButton = 'log in'/>
                        <ButtonCom nameButton = 'Sing Up'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar