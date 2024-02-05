import React from "react";
import { useNavigate } from "react-router-dom";
import './party.css'

const AddParty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="addParty_bg">
        <div className="addParty">
          <h1>AddParty</h1>

          <h3>Party Information</h3>

          <div className="addParty_box">

            <div className="addParty_input">
              <label>Party Name</label>
              <input
                type="text"
                name="partyName"
                placeholder="Enter Party Name"
              />
            </div>

            <div className="addParty_input">
              <label>Party Short Code</label>
              <input
                type="text"
                name="partyCode"
                placeholder="Enter Party Code"
              />
            </div>

            <div className=" addParty_img">
              <label>Upload a file</label>
              <input type="file" id="logo" name="profile" />
            </div>

            <div className="addParty_btn">
              <button onClick={() => navigate("/parties")}>Cancel</button>
              <button>Add</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AddParty;
