import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Login from "./Pages/LoginS/Login";
import SignUp from "./Pages/LoginS/SignUp";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </>
  );
}

export default App;
