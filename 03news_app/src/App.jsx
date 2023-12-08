import React, { useEffect, useState } from "react"
import Navbar from "./Component/Navbar/Navbar"
import NewsBoard from "./Component/NewsBoard"


function App() {
  const themeLocal = JSON.parse(localStorage.getItem('theme'))

  const [theme , setTheme] =  useState(themeLocal ? themeLocal : 'light')
  const [category , setCategory] = useState('general')


  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme));
  },[theme])


  return (
    <>
     <Navbar theme={theme} setTheme={setTheme} setCategory={setCategory}/>
     <NewsBoard theme={theme} setTheme={setTheme} category={category}/>
    </>
  )
}

export default App
