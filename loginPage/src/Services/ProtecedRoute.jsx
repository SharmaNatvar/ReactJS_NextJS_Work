import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecedRoute = () => {
    const auth = localStorage.getItem("userLogin")
  return auth ? <Outlet/> : <Navigate to={"/"}/>
}

export default ProtecedRoute
