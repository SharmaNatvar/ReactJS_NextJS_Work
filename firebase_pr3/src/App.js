import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";
import ProdectRouter from "./Component/ProdectRouter";
import Memory from "./Pages/Memory";
import ToDo from "./Pages/ToDo";
import UserProfile from "./Component/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/" element={<ProdectRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
