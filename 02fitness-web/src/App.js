import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import DailyHealth from "./Component/DailyHealth";
import GoalsSec from "./Component/GoalsSec";
import AppSec from "./Component/AppSec";
import Footer from "./Component/Footer";

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <DailyHealth/>
    <GoalsSec/>
    <AppSec/>
    <Footer/>
   </>
  );
}

export default App;
