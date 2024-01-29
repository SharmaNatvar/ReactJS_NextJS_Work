import { signOut } from 'firebase/auth'
import React from 'react'
import { dataBase } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
     <h1>Home</h1> 
     <button onClick={()=>{signOut(dataBase).then(val =>{
        navigate('/')
     })}}>SingOut</button>
    </>
  )
}

export default Home
