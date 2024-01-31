import { Navigate, Outlet } from "react-router-dom"

export const ProtectRouter = () => {
const auth = JSON.parse(localStorage.getItem('LoginKey'))
return auth ? <Outlet/> : <Navigate to={'/'}/>
}

