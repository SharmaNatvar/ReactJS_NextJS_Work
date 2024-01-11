import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import UserForm from "./Component/UserForm";
import UserData from "./Component/UserData";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/from" element={<UserForm/>}/>
      <Route path="/from/:index" element={<UserForm/>}/>
      <Route path="/data" element={<UserData/>}/>
    </Routes>
    </>
  );
}

export default App;
