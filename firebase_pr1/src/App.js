import { Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import Loggin from "./pages/Loggin";
import Home from "./pages/Home";
import { ProtectRouter } from "./Component/ProtectRouter";
import Todo from "./pages/Todo";
import Image from "./pages/Image";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loggin />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<ProtectRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/image" element={<Image />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
