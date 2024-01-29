import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecedRouter = () => {

    const auth = JSON.parse(localStorage.getItem('loginKey'))
  return auth ? <Outlet/> : <Navigate to={'/'}/> 
}

export default ProtecedRouter