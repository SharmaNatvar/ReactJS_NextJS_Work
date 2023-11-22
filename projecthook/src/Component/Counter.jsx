import React, { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0);


    let reset = ()=>{
        setCounter(0)
    }


  return (
    <>
      <div className='row'>
        <button>Undo</button>
        <button>Redo</button>
        <button onClick={reset}>Reset</button>
      </div>
      <hr/>
      <div className='row'>
        <button onClick={()=>setCounter(counter/2)} >/2</button>
        <button onClick={()=>setCounter(counter-1)}>-1</button>
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
        <button onClick={()=>setCounter(counter*2)}>x2</button>
      </div>
      <hr/>
    </>
  )
}

export default Counter
