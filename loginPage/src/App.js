import React from "react";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Component/LoginSignip/Login";
import SignUp from "./Component/LoginSignip/SignUp";
import NotFound from "./Page/NotFound";
import ProtecedRoute from "./Services/ProtecedRoute";

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/sign" element={<SignUp/>}/>
     <Route path="/" element={<ProtecedRoute/>}>
      {/* <Navbar/> */}
        <Route path="/home" element={<Home/>}/>
     </Route>

        <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  );
}

export default App;
