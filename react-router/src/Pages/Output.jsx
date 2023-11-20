import React from 'react'
import { useParams } from 'react-router-dom'
import JsonData from '../JsonData'


const Output = () => {
    // console.log(useParams());
    const {userName} = useParams();
    // console.log(userName);

    let result = JSON.parse(localStorage.getItem('seleteUser'))
    
    console.log(result);
    // const result = JsonData.filter((e)=>e.userName===userName);


  return (
    <>
        <h1>{result.userName}</h1>
        <h1>{result.email}</h1>
        <h2>{result.text}</h2>
        <h2>{result.country}</h2>
    </>
  )
}

export default Output