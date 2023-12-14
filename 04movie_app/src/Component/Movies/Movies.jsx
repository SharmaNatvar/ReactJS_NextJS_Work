import React from 'react'
import MovieList from '../MovieList/MovieList'
import PageNav from '../PagesNav/PageNav'

const Movies = () => {
  return (
    <>
        <section className=' w-full h-auto'>
            <MovieList/>
            <PageNav/>
        </section>
    </>
  )
}

export default Movies