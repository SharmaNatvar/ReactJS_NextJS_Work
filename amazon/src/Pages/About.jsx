import React from 'react'
import Cards from '../Component/Cards'
import CardData from '../CardData';

const About = () => {
  return (
    <>
      <h2>About Product</h2>
      <div className='d-inline-flex flex-wrap'>
      {
        CardData.map((item)=>{
          return(
            <Cards CardData={item}/>
          )
        })
      }
      </div>
    </>
  )
}

export default About
