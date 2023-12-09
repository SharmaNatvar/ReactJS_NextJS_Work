import React from 'react'

const Cards = ({CardData}) => {

  return (
    <>
        <div className='bg-dark m-3 ' style={{width:'18rem', borderRadius:'10px'}}>
            <div className='cart p-3 '>
            <img src={CardData.img} />
            <h5 className='text-light'>{CardData.title}</h5>
            <p className='text-light'>{CardData.author}</p>
            <p className='text-light'>Price - {CardData.price}</p>
            <button className='btn bg-light'>add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default Cards
