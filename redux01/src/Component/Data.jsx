import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, addToCard, emptyToCart } from '../reduxSaga/action'
import { productList } from '../reduxSaga/productAction'

const Data = () => {
  const dispatch = useDispatch()

  const result = useSelector(state => state.userProductList)
  console.log('data result in selector', result);

  const emptyData = () => {
    dispatch(emptyToCart())
  }

  useEffect(() => { dispatch(productList()) }, [])

  return (
    <>
      <h1>data</h1>

      <button onClick={emptyData}>Empty Cart</button>
      {/* <button onClick={() => dispatch(productList())}> Product List </button> */}

      <div className='product_bg'>
        <div className="container_bg">
          <div className='product'>
            {
              result?.map((item) => {
                return (
                  <div className='product_list' key={item.id}>
                    <img src={item.image} alt="image " />
                    <h3>{item.title.slice(0, 12).toLowerCase()}....</h3>
                    <h4>&#36; {item.price}</h4>
                    <p>{item.description.slice(0, 25).toLowerCase()}....</p>
                    <button onClick={() => { dispatch(addToCard(item)) }}>Add Cart</button>
                    <button onClick={() => { dispatch(removeToCart(item.id)) }}>Remove Cart</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Data
