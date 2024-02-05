import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Login from "./Pages/LoginS/Login";
import SignUp from "./Pages/LoginS/SignUp";
import Home from "./Pages/Home/Home";
import AddElection from "./Pages/Election/AddElection";
import AddParty from "./Pages/party/AddParty";
import Election from "./Pages/Election/Election";
import Parties from "./Pages/party/Parties";
import Votes from "./Pages/Election/Votes";
import Users from "./Pages/Users/Users";
import AddUsers from "./Pages/Users/AddUsers";
import Profile from "./Component/Profile/Profile";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addelection" element={<AddElection />} />
        <Route path="/addparty" element={<AddParty />} />
        <Route path="/election" element={<Election />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
