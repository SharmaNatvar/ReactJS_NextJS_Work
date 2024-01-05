import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../reduxSaga/productAction';

const Navbar = () => {

    const result = useSelector((stat) => stat.userInputData);

    const dispatch = useDispatch()

  return (
    <>
     <div className="navbar_bg">
     <div className='container_bg'>
      <div className='navbar'>
        <Link to={'/'}><h1>Navbar</h1></Link>
        <div className='search_box'>
          <input type='text' placeholder='search' onChange={(e)=> dispatch(productSearch(e.target.value))}/>
        </div>
        <div className='cart_bg'>
            <Link to={'/cartdata'}>
            <img src="https://t3.ftcdn.net/jpg/04/44/70/00/360_F_444700077_FVDy7M9hd6xGNMLo2m0Dq4424fAWlbMU.jpg" alt="img"/>
            <span>{result.length}</span>
            </Link>
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Navbar
