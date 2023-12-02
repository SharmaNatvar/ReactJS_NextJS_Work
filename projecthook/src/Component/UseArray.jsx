// import React, { useState } from 'react'

import { useState } from "react"



const ARRAYNAME = [
    'Luke',
    'Allie',
    'Ada',
    'Ollie',
    'Bruce',
    'Lora',
    'Linnie',
    'Raymond',
    'Lillian',
    'Abbie'
]


const UseArray = () => {

  const[addArray, setAddArray] = useState([])

  const addArrayFnc = (item) => {
    setAddArray((classStudent)=>{
      return [...classStudent , item]
    })
  }

  const removeArrayFun = (item) =>{
    setAddArray( (classStudent) => {
      const result = [...classStudent];
      result.splice(classStudent.indexOf(item),1)
      return result
    })
  }

  return (
    <>
      <div className='container'>
        <h2>learn Array</h2>
        <div className='row'>
          <div className='col-6'>
            <h3 style={{textAlign:'center'}}> classmates </h3>
            <ul className='list_group'>
              {
                ARRAYNAME.map((item)=>{
                  if(addArray.includes(item)) return null;
                  return( <li key={item} className='list_group_item'>{item} 
                    <button style={{fontSize: '16px' , margin:"2px 10px"}} onClick={()=> addArrayFnc(item)}>Add</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='col-6'>
              <h3 style={{textAlign:'center'}}>Basket team</h3>
              <ul className='list_group'>
              {
                addArray.map((item)=>{
                  return( <li key={item} className='list_group_item'>{item} 
                    <button style={{fontSize: '16px' , margin:"2px 10px"}} onClick={()=>removeArrayFun(item) }>remove</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseArray
