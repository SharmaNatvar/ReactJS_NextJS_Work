import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    return (
      <>
       <button onClick={() => navigate("/home")}>Back</button>
     <h1>Profile</h1> 
    </>
  )
}

export default Profile
