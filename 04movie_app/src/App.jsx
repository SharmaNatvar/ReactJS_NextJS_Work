import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Component/Movies/Movies";
import Navbar from "./Component/Navbar/Navbar";


function App() {



  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Movies/>
      {/* <Routes>
        <Route path="/Movie" element={<Movies/>} />
      </Routes> */}
    </BrowserRouter>
    </>
  )
}

export default App
