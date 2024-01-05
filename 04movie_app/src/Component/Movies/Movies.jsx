import React, { useState } from 'react'
import MovieList from '../MovieList/MovieList'
import PageNav from '../PagesNav/PageNav';
import { useGetMoviesQuery } from '../../services/Api';
import { useSelector } from 'react-redux';

const Movies = () => {

  // console.log(data);

  const [page, setPage] = useState(1);
  const {genreName , searchQuery} = useSelector((state) => state.currentGenre);
  const{data , isFetching , error} = useGetMoviesQuery({genreName , page , searchQuery});



  return (
    <>
        <section className=' w-full flex flex-col justify-center items-center h-auto'>
            <MovieList movies={data}/>
            <PageNav currentPage={page} setPage={setPage} totalPages={data?.total_pages}/>
        </section>
    </>
  )
}

export default Movies