import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Testimonial from "./Pages/Testimonial";
import Output from "./Pages/Output";
import Curd from "./Pages/Curd";
import Navbar from "./Component/Navbar";
import NotFound from "./Pages/NotFound";
import { AddUser } from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";

// import Review from "./Pages/Review";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Curd" element={<Curd/>} />
            <Route path="/Curd/AddUser" element={<AddUser/>} />
            <Route path="/Curd/UpdateUser/:id" element={<UpdateUser/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/:userName" element={<Output/>} />            
            <Route Component={<NotFound/>}/>
            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
