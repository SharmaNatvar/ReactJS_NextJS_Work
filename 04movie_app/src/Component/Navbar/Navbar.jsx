import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { searchMovie } from '../../Feature/currentGenre';
import { useDispatch } from 'react-redux';

const Navbar = () => {

  const [query , setQuery] = useState()
  const dispatch = useDispatch();

const handleKeyPress = () =>{
 dispatch(searchMovie(query))
}

  return (
    <>
        <div className='w-full px-7 py-5 text-white flex justify-center items-center bg-light-blue'>
            <div className='w-[100%] max-w-[1500px] flex items-center justify-between'>
                <Link to={'/'} className=" font-black text-black text-2xl">Movie App</Link>
                <div className=" border-purple-50 relative hidden sm:block">
                    <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter Movie Name' className=' bg-gray-300 p-3 text-black border-none outline-none rounded-lg text-sm w-[250px] placeholder:text-sm'/>
                    <FaSearch className='absolute right-3 top-[50%] -translate-y-[50%] text-white cursor-pointer' onClick={handleKeyPress}/>
                </div>
                <Link to={'/genra'} className=' py-2 px-5 bg-slate-700 rounded-lg text-sm'>Select</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar