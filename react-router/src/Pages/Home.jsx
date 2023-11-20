import React from 'react'
// import Card from '../Component/Card'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Card from './Card'

const Home = () => {

    let nav = useNavigate()

  return (
    <>
          <Navbar/>

        <h1>this is home page</h1>
        <button onClick={ ()=>{nav('/card')}}>sign in</button>

      <Card/>

    </>
  )
}

export default Home