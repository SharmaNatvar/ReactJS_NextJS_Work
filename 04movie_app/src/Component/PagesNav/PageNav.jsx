import React from 'react'

const PageNav = ({currentPage , totalPages , setPage}) => {
  
  if(totalPages === 0) return null;
  const handlePrev = () => {
    if(currentPage !== 1){
      setPage((prevPage) => prevPage - 1);
    }
  }

  const handleNext = () => {
    if(currentPage !== totalPages){
      setPage((prevPage) => prevPage + 1)
    }
  }
  
  return (
    <div className='text-white mt-5'>
      <button className='bg-blue-950 px-3 py-2 text-sm rounded-lg mr-3' onClick={handlePrev}>Previous</button>
      <button className='bg-blue-950 px-3 py-2 text-sm rounded-lg ' onClick={handleNext}>Next</button>
    </div>
  )
}

export default PageNav