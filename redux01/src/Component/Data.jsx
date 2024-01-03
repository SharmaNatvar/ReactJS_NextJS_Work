import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, addToCard, emptyToCart } from '../reduxSaga/action'
import { productList } from '../reduxSaga/productAction'

const Data = () => {
    const dispatch =  useDispatch()
    const userName = useRef()
    const password = useRef()

    const result = useSelector(state => state.userProductList)
    console.log('data result in selector',result );

    const handleData = () =>{
        const inputData = {
            userName : userName.current.value,
            password : password.current.value
        }
        
        dispatch(addToCard(inputData))
    }
    

    const removeData = () =>{
        dispatch(removeToCart())
    }

    const emptyData = () =>{
        dispatch(emptyToCart())
    }

  return (
    <>
      <h1>data</h1>
      <input type="text" placeholder='User Name' ref={userName}/><br/>
      <input type="text" placeholder='password' ref={password}/>
      <button onClick={handleData}>Add Cart</button>
      <button onClick={removeData}>Remove Cart</button>
      <button onClick={emptyData}>Empty Cart</button>
      <button onClick={()=>dispatch(productList())}> Product List </button>
    </>
  )
}

export default Data
