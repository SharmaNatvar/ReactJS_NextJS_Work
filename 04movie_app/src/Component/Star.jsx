import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";

const Star = ({starVote}) => {

    const stars = starVote / 2

    const starPrinting = Array.from({length:5}, (ele , index) =>{
        let n = index +0.5;
        return(
            <span key={index} className='text-yellow-500'>
                {
                    (stars >= index +1 )?(
                        <FaStar/>
                    ):(stars >= n) ? (
                        <FaStarHalfAlt/>
                    ):(
                        <FaRegStar/>
                    )
                }
            </span>
        )
    })
  return (
    <>
        <div className='flex justify-center items-center gap-1'>
            {starPrinting}
        </div>
    </>
  )
}

export default Star