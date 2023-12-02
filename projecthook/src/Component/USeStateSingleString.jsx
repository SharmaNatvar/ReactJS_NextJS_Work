import React , {useState} from 'react'

const USeStateSingleString = () => {

    const [inputValue, setInputValue] = useState('');


    const userNameFnc = (event)=>{
        setInputValue(event.target.value)
    console.log(event.target.value);

    }

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>learn useState string</h2>
        <input id='text' name='userName' onChange={userNameFnc}/>
        <h3>current input : {inputValue}</h3>
      </div>
    </>
  )
}

export default USeStateSingleString
