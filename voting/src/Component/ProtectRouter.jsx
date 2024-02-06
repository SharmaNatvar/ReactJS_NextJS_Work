import { Navigate, Outlet } from "react-router-dom"

const ProtectRouter = () => {
  const auth = JSON.parse(localStorage.getItem('loginKey'))

  console.log(auth , 'hu');
    return auth  ? <Outlet/> : <Navigate to={'/'}/>
}

export default ProtectRouter
