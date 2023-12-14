import React from 'react';
import poster from '../../assets/poster.jpeg'

const Movie = () => {
    return (
        <>
            <div className='w-[200px] h-[400px] text-black flex justify-center items-center flex-col'>
                <div className=' w-[250px] bg-contain'>
                    <img src={poster} alt='poster' />
                </div>
                <h1 className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">title</h1>
            </div>
        </>
    )
}

export default Movie