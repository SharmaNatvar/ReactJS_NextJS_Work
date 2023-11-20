import React from "react";
import Button from "./Button";

let ColText = (props) =>{
    return(
        <>
            <div class="home_data">
                {props.heading}
                <p class="home_description">
                    {props.para}
                </p>
                <Button buttonText = {props.buttonLink}/>
            </div>
        </>
    )
}

export default ColText