import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Product from "./Pages/Product";
import About from "./Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiCall from "./Pages/ApiCall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <div className="containerCustom">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>    
            <Route path="/ApiCall" element={<ApiCall/>}/>    
          </Routes>
      </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
