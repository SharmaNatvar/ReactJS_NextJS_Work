import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";
import ProtectRouter from "./ProtectRouter";
import NotFound from "./Pages/NotFound";
import ToDo from "./Pages/ToDo";
import Image from "./Pages/Image";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/" element={<ProtectRouter />}>
        <Route path="/home" element={<Home />} />
        <Route path="/image" element={<Image/>} />
          <Route path="/todo" element={<ToDo/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
