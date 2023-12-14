import React from 'react';
import { FaSearch } from "react-icons/fa"

const Navbar = () => {
  return (
    <>
        <div className='w-full px-7 py-5 text-white flex justify-center items-center bg-light-blue'>
            <div className='w-[100%] max-w-[1500px] flex items-center justify-between'>
                <p className=" font-black text-black text-2xl">Movie App</p>
                <div className=" border-purple-50 relative">
                    <input type='text' placeholder='Enter Movie Name' className=' bg-gray-300 p-3 text-black border-none outline-none rounded-lg text-sm w-[250px] placeholder:text-sm'/>
                    <FaSearch className='absolute right-3 top-[50%] -translate-y-[50%] text-white'/>
                </div>
                <button className=' py-2 px-5 bg-slate-700 rounded-lg text-sm'>Select</button>
            </div>
        </div>
    </>
  )
}

export default Navbar