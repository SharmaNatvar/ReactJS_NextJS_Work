import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Testimonial from "./Pages/Testimonial";
import Output from "./Pages/Output";

// import Review from "./Pages/Review";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/:userName" element={<Output/>} />
            
            
            {/* <Route path="/name" element={<Review/>} /> */}
            {/* <Route path="*" element={<Review/>} /> */}

            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
