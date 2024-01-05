import React from 'react'
import Movies from '../Movies/Movies'
import TopBar from '../Topbar/TopBar';
import { useGetMovieByGenreQuery } from '../../services/Api';

const Genra = () => {
  const { data }  = useGetMovieByGenreQuery();
  return (
    <>
        <section className=''>
            <TopBar/>
            <Movies movie={data}/>
        </section>
    </>
  )
}

export default Genra