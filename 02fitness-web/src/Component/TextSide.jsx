import React from "react";
import ImageSide from "./ImageSide";
import ButtonCom from "./ButtonCom";


const TextSide =(props) =>{
    return(
        <div class="hero_left_side">
            <h1>{props.heading}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis obcaecati facere excepturi aliquid quas eveniet cupiditate ratione minima quo.</p>
            <div class="d-flex">
                <ButtonCom nameButton='book'/>
                <ButtonCom nameButton = 'video'/>
            </div>
        </div>
    )
}

export default TextSide