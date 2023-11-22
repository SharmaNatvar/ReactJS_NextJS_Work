import React from "react";
import ImageSide from "./ImageSide";
import TextSide from "./TextSide";
import sectionIma from '../asstes/section2pic.png'

const DailyHealth = ()=>{
    return(
        <>
            <div className="d-flex">
                <div className="col-7">
                    <ImageSide ImageCall={sectionIma}/>
                </div>
                <div className="col-5">
                    <TextSide heading='healthy living simplified'/>
                </div>
            </div>
        </>
    )
}

export default DailyHealth
