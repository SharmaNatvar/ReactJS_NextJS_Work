import React, { useState } from 'react'

const UseStateMultiValue = () => {
    const [userValue,setUserValue] = useState(' ')

    const userNameFnction = (event)=>{
        let user = {...userValue,[event.target.name]:event.target.value}
        console.log(user);
        setUserValue(user)
    }

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>learn useState string</h2>
        <input id='text' name='userName' onChange={userNameFnction}/>
        <input id='text' name='userName2' onChange={userNameFnction}/>
        <h3>firstName : {userValue.userName}</h3>
        <h3>LastName : {userValue.userName2}</h3>
      </div>
    </>
  )
}

export default UseStateMultiValue
