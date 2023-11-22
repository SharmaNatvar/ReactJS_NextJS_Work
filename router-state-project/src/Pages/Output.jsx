import React from 'react'
import { useParams } from 'react-router-dom'
import JsonData from '../JsonData'


const Output = () => {
    console.log(useParams());
    const {userName} = useParams();
    console.log(userName);

    

    const result = JsonData.filter((e)=>e.userName==userName);


  return (
    <>
        <h1>{result[0].userName}</h1>
        <h2>{result[0].text}</h2>
        <h2>{result[0].country}</h2>
    </>
  )
}

export default Output