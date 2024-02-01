import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import Home from "./Pages/Home";
import ToDo from "./Pages/ToDo";
import Image from "./Pages/Image";
import { ProtectRouter } from "./Component/ProtectRouter";
import Profile from "./Component/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<ProtectRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/image" element={<Image />} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
