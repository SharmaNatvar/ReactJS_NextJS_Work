import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Login from "./Pages/LoginS/Login";
import SignUp from "./Pages/LoginS/SignUp";
import Home from "./Pages/Home/Home";
import AddElection from "./Pages/Election/AddElection";
import AddParty from "./Pages/Election/AddParty";
import Election from "./Pages/Election/Election";
import ViewParties from "./Pages/Election/ViewParties";
import Votes from "./Pages/Election/Votes";
import Users from "./Pages/Users/Users";
import AddUsers from "./Pages/Users/AddUsers";
import Profile from "./Component/Profile/Profile";

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
        <Route path="/viewparties" element={<ViewParties />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
