import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const result = useSelector((stat) => stat.userInputData);
    console.log(result);

  return (
    <>
     <div className="navbar_bg">
     <div className='container_bg'>
      <div className='navbar'>
        <h1>Navbar</h1>
        <div className='cart_bg'>
            <img src="https://t3.ftcdn.net/jpg/04/44/70/00/360_F_444700077_FVDy7M9hd6xGNMLo2m0Dq4424fAWlbMU.jpg" alt="img"/>
            <span>{result.length}</span>
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Navbar
