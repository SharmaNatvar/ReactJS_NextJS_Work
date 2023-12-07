import React, { useRef, useState } from 'react'


const Contact = () => {
  const inputValue = useRef();
  const [inputData , setInputData] = useState([])

  // const data = ;

  const valueSubmit = () => {
      // let data = inputValue.current.value;
      setInputData([...inputData,inputValue.current.value]);
  }

  return(
    <>
    <div>
        <input type='text' ref={inputValue}/>
        <button type='button' onClick={()=>valueSubmit()}>Submit</button>
        {/* <h1>{inputData}</h1><br/> */}
        {
            inputData?.map((item , index)=>{return (
                <h1 key={index}>{item}</h1>)
            })
        }
    </div>
    </>
  )
}

export default Contact
