import React from 'react'
import genreIcons from '../../assets/genres';
import { useGetMovieByGenreQuery } from '../../services/Api';
import { Link } from 'react-router-dom';
import { selectGenre } from '../../Feature/currentGenre';
import { useDispatch } from 'react-redux';

const TopBar = () => {

    const dispatch = useDispatch();
    const {data, isFetching } = useGetMovieByGenreQuery();

  return (
    <>
        <div className=' bg-gray-950 flex gap-3 p-3 overflow-x-auto'>
            {
                isFetching || ( data?.genres.map(({name , id})=>(
                    <Link key={id} value={id} className='text-white flex p-2 border rounded-lg'>
                        <div className='flex items-center' onClick={()=> dispatch(selectGenre(id))}>
                            <div>
                                <img src={genreIcons[name.toLowerCase()]} width={30} height={30} className='text-black invert mr-5'/>
                            </div>
                            {name}
                        </div>
                    </Link>
                ))
                )
            }
        </div>
    </>
  )
}

export default TopBar