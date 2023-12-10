import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./Component/Navbar";
import Todo from "./Page/Todo";
import Curd from "./Page/Curd";
import UpdateCurd from "./Component/UpdateCurd";


function App() {
  return (
    <>
    {/* <Home/> */}

      <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Todo" element={<Todo/>}/>
          <Route path="/Curd" element={<Curd/>}/>
          <Route path="/UpdateCurd" element={<UpdateCurd/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
