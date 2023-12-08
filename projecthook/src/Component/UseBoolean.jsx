import React, { useState } from 'react'

const UseBoolean = () => {

    let[ useFirst , setUseFirst ] = useState(true)

    const toggle = () =>{
        setUseFirst(!useFirst)
    }

  return (
    <>
      <div className='rows' >
        <h2>learn Boolean</h2>
        <button onClick={toggle}>click here</button>
        {
            useFirst &&(
                <p> show the text</p> 
            )
        }
      </div>
      
    </>
  )
}

export default UseBoolean
