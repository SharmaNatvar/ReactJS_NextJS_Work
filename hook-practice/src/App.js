import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import Featured from "./Component/Featured";
import Hooks from "./Component/Hooks";
// import Hooksuse from "./Component/Hooksuse";


function App() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Featured/>
      <Hooks/>

    {/* <Hooksuse/> */}
   </>
  );
}

export default App;
