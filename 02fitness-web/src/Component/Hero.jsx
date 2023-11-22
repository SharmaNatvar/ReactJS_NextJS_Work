import React from "react";
import ImageSide from "./ImageSide";
import icon from '../asstes/heropage.png'
import appStore from '../asstes/appstore.png';
import googlePlay from '../asstes/googlePlay.png';



const Hero = () =>{
    return (
        <>
            <div className="d-flex">
                <div className="col-5">
                    <div class="hero_left_side">
                        <h1>healthy living simplified</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis obcaecati facere excepturi aliquid quas eveniet cupiditate ratione minima quo.</p>
                        <div class="d-flex">
                            <a href="#"><ImageSide ImageCall={appStore}/></a>
                            <a href="#"><ImageSide ImageCall={googlePlay}></ImageSide></a>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <ImageSide ImageCall={icon}/>
                </div>
            </div>
        </>
    )
}

export default Hero