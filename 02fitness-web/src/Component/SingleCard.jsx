import React from "react";
import ImageSide from "./ImageSide";


const SingleCard = (props) =>{
    return(
        <div class="task_2">
            {/* <img src="./asstse/sectionIcon2.png" alt="image"/> */}
            <ImageSide ImageCall={props.cardSecImg}/>
            <h3>{props.cardHeading}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, quasi!</p>
        </div>
    )
}

export default SingleCard