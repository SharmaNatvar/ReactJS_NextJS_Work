import { Navigate, Outlet } from "react-router-dom"

const ProtectRouter = () =>{
    const auth = JSON.parse(localStorage.getItem('loginKey'))
    return auth ? <Outlet/> : <Navigate to={'/'}/>
}

export default ProtectRouter