import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigation = useNavigate();

  return (

    <>
      <div className='contact'>
          <div >Contact</div>
          <p>you know about as</p>
          <button onClick={() => navigation ("/about")}> Click me</button>

      </div>


    </>

  )
}

export default Contact