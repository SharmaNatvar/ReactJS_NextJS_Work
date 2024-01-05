import React from "react";
import Data from "./Component/Data";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import CartData from "./Component/CartData";

function App() {
  return (
    <>
      <Navbar/>
      <h1>redux-saga</h1>
      <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/cartdata" element={<CartData/>}/>
      </Routes>
      
    </>
  );
}

export default App;
