import React from 'react'
import './Common.scss'


const Container = ({children}) => {
  return (
    <>
<div className='containerBG'>{children}</div>
    </>
  )
}

export default Container