import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Atoms/Navbar'
import Help from './Pages/Help'
import Testimonial from './Atoms/testimonial'
import Faq from './Atoms/faq'
import NotFound from './Pages/NotFound'

function App() {


  return (
    <>
      
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='help' element={<Help/>}>
          <Route path='faq' element={<Faq/>}/>
          <Route path='testimonial' element={<Testimonial/>}/>
        </Route>


        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </>
  )
}

export default App
