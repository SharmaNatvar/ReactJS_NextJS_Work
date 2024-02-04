import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Login from "./Pages/LoginS/Login";
import SignUp from "./Pages/LoginS/SignUp";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>

    </Routes>

    </>
  );
}

export default App;
