import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Cards from "./Pages/Cards";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Table from "./Pages/Table";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
import ViewUser from "./Component/ViewUser";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cards" element={<Cards/>}/>
        <Route path="/Table" element={<Table/>}/>
        <Route path="/Table/AddUser" element={<AddUser/>}/>
        <Route path="/Table/UpdateUser/:id" element={<UpdateUser/>}/>
        <Route path="/Table/ViewUser/:id" element={<ViewUser/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
