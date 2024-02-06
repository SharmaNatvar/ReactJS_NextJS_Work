import React from "react";
import { useNavigate } from "react-router-dom";
import './election.css'

const AddElection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="addElection_bg">
        <div className="addElection">
          <h1>AddElection</h1>
          <h3>Election Information</h3>
          <div className="addElection_box">
            <div className="addElection_input">
              <label> Election Name </label>
              <input
                type="text"
                name="partyName"
                placeholder="Enter Party Name"
              />
            </div>
            <div className="addElection_input">
              <label> Registration Date </label>
              <input type="date" name="registrationDate" />
            </div>
          </div>

        <div className="addElection_btn">
          <button onClick={() => navigate("/election")} type="button">
            Cancel
          </button>
          <button type="submit">Sumbit</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddElection;
