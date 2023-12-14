import React from 'react'
import Movie from '../Movie/Movie'

const MovieList = () => {
  return (
    <>
      <div className='p-1 h-auto grid grid-cols-5 gap-4'>
      {
        Array(20).fill(true).map(()=>{
          return(
            <Movie/>
          )
        })
      }
      </div>
    </>
  )
}

export default MovieList