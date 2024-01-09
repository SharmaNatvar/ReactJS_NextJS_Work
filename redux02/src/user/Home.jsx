import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_API_DATA_PENDING } from '../redux-saga/user/action/action'

const Home = () => {

    const dispatch = useDispatch()

    const apiData = useSelector((state)=>state.userReducer)
    console.log(apiData , 'user jsx');

  return (
    <>
      <h1>this from user Home</h1>
      <button onClick={()=>{dispatch({type:GET_API_DATA_PENDING, payload:[]})}}>click here</button>
    </>
  )
}

export default Home
