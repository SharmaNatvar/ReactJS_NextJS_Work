import React from "react";
import heroImg from '../assets/pexels-photo-8062287.webp'

const Hero = () =>{
    return(
        <div className="d-flex" >
            <div className="col-6">
                <div class="" style={{width: "100%"}} >
                    <h1 class="my-5 text-center display-4">Managing Financial<br/>payments has naver <br/> been easier</h1>
                    <p class="h4 font-weight-light mb-5">welcome to a world of financial empowerment. Our platfrom pravider the tools and expertise you need to take command of your finanes</p>
                    <span class="btn btn-primary m-3">Go somewhere</span>
                    <span >See How it Works</span>
                </div>
            </div>
            <div className="col-6">
                <div class="card" style={{width: "100%"}} >
                    <img src={heroImg} alt="logo"/>
                </div>
            </div>
        </div>
    )
};

export default Hero;