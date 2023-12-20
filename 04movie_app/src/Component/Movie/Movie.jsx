import React from 'react';
import Star from '../Star';
import { Link } from 'react-router-dom';

const Movie = ({movie , index}) => {
console.log(movie);
    return (
        <>
            <div className='w-[200px] h-auto text-black flex flex-col justify-center items-center '>
                <Link to={`/Movie/${movie?.id} `}>
                    <div className=' w-[200px] rounded-lg overflow-hidden'>
                        <img src={movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'} alt={movie?.title} />
                    </div>
                </Link>
                <h1 className="font-semibold mt-3 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{movie?.title} </h1>
                <div className='mt2'>
                <Star starVote={movie?.vote_average}/>
                </div>
            </div>
        </>
    )
}

export default Movie