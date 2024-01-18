import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const logOutData = () =>{
    localStorage.removeItem('userLogin');
    localStorage.removeItem('userData');
    navigate('/')
  }

  return (
    <>
    <h1>Home</h1>
    <button className='btn btn-outline-info' onClick={logOutData}>Log out</button>
    </>
  )
}

export default Home