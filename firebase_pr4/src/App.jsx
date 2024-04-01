import { Route, Routes } from 'react-router-dom'
import './App.scss'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <h1>from app</h1>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' exact element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
