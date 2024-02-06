import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import dasVote from '../../assets/election.jpg'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home_Das'>
        <h1>Bharat Welcome's to EveryOne Portal of ECI</h1>
        <img src={dasVote} alt='img'/>
    </div>
    </>
  )
}

export default Home
