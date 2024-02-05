import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddParty = () => {
  const navigate = useNavigate();

  return (
    <>
     <button onClick={() => navigate("/parties")}>Back</button>

     <h1>AddParty</h1> 
    </>
  )
}

export default AddParty
