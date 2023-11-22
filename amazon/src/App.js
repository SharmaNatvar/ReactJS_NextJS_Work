import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Product from "./Pages/Product";
import About from "./Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>    
        </Routes>
      </BrowserRouter>
      {/* 
      <Product/>
      <About/> */}
    </>
    
  );
}

export default App;
