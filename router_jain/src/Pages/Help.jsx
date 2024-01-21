import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
let hay = 0;
  console.log(hay);

  return (
    <>
      <div className="help_bg">
        <h2>help</h2>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quia reprehenderit voluptatum accusamus odit nobis dolorum corrupti repudiandae fugit nostrum?</p>

        <ul>
            <li><Link to={'faq'}>View the faq</Link></li>
            <li><Link to={'testimonial'}>testimonial</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Help
