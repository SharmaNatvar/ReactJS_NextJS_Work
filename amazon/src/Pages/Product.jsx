import React from 'react'
import Home from './Home'

const Product = () => {

    // let [searchVal, setSearchVal] = 

    let search = (e) =>{
        console.log(e.target.value);
    }

  return (
    <>
      <div className='d-flex'>
        <div className='col-2'>
            <span className='mt-2'>abc</span><br/>
            <span className='mt-2'>def</span><br/>
            <span className='mt-2'>dagd</span>
            <input type='text' name='search' onChange={search}></input><br/>
            <button type='submit'> search</button>
        </div>
        <div className='col-10 mr-2'>

            <Home/>
        </div>
      </div>
    </>
  )
}

export default Product
