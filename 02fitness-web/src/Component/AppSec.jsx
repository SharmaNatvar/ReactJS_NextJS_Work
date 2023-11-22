import React from 'react';
import ImageSide from './ImageSide';
import TextSide from './TextSide';
import secImage from '../asstes/section4img.png'

const AppSec = () => {
  return (
    <>
        <div className="d-flex">
            <div className="col-5">
                <TextSide heading='healthy living simplified'/>
            </div>
            <div className="col-7">
                <ImageSide ImageCall={secImage}/>
            </div>
        </div>
    </>
  )
}

export default AppSec