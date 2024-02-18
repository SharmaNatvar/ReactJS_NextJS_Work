import { useState } from 'react'
import Navbar from './component/Navbar'
import UserDetails from './component/UserDetails'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      
      <Navbar/>
      <UserDetails/>
    </>
  )
}

export default App
