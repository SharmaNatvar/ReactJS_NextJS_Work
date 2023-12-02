import React ,{useState} from 'react'

const UseStateNum = () => {
    let [counter, setCounter] = useState(0)

    function counterInc(){
        console.log('hay');
        setTimeout(()=>setCounter((currentValue)=>currentValue+1),1000)
    }
  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>learn useState number</h2>
        <h3>current counter : {counter}</h3>
        <button style={{backgroundColor:"lightblue",borderRadius:'10px'}} onClick={counterInc}>Increse</button>
      </div>
    </>
  )
}

export default UseStateNum
