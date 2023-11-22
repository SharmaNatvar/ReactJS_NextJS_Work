import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import NumList from "./Component/NumList"
import Manage from "./Component/Manage";
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <NumList/>
      <Manage/>
      <Footer/>
    </>
  );
}

export default App;
