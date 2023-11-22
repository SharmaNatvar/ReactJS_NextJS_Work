import React from "react";
import SingleCard from "./SingleCard";
import secIcon1 from '../asstes/sectionIcon1.png';
import secIcon2 from '../asstes/sectionIcon2.png';
import secIcon3 from '../asstes/sectionIcon3.png';

const GoalsSec = ()=>{
    return(
        <>
            <div className="col-12 text-center">
                <h1>hello</h1>
            </div>
            <div className="d-flex">
                <div className="col-4">
                    <SingleCard cardSecImg={secIcon1} cardHeading='Learn & Improve'/>
                </div>
                <div className="col-4">
                    <SingleCard cardSecImg={secIcon2} cardHeading='Time Management'/>
                </div>
                <div className="col-4">
                    <SingleCard cardSecImg={secIcon3} cardHeading='Stay Motivated'/>
                </div>
            </div>
        </>
    )
}


export default GoalsSec