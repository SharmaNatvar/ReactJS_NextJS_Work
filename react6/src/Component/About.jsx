import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigation = useNavigate();

  return (
    <>
      <div className='about'>
          <div>About</div>
          <p>you want to contact as</p>
          <button onClick={() => navigation ("/contact")} >click here</button>
      </div>
    </>
  )
}

export default About