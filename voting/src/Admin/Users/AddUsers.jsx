import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_USER_PENDING } from "../../Redux-Saga/admin/Action/userAction";
import { useDispatch } from "react-redux";

const AddUsers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData , setInputData] = useState({})

  const getInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

console.log(inputData);

const handleSumbit = ()=>{
  if(inputData.Name && inputData.Email){
    dispatch({type : POST_USER_PENDING , payload : inputData})
  }
  else{
    alert("Please fill all fields !")
  }
}
  return (
    <>
      <div className="adduser_bg">
        <div className="adduser">
          <h1>Add User</h1>
          <h3> Indian Resident Elector</h3>

          <div className="adduser_box">
            <div className="adduser_input">
              <label> Your Name</label>
              <input type="text" name="Name" placeholder="Enter Your Name"  onChange={getInputData}/>
            </div>

            <div className="adduser_input">
              <label> Your BirthDate</label>
              <input type="date" name="DOB"  onChange={getInputData}/>
            </div>

            <div className="adduser_input">
              <label>Email address</label>
              <input name="Email" type="email" placeholder="Enter Your Email" onChange={getInputData}/>
            </div>

            <div className="adduser_input">
              <label> Enter Your Phone No.</label>
              <input name="Phone" type="text" placeholder="Enter Your Phone" onChange={getInputData}/>
            </div>

            <div className="adduser_input">
              <label> Your Address</label>
              <input
                type="text"
                name="Address"
                placeholder="Enter Your Address"
               onChange={getInputData}
              />
            </div>

            <div className="adduser_input">
              <label> Enter Your Gender</label>
              <input type="text" name="Sex" placeholder="Enter Your Gender" onChange={getInputData}/>
            </div>

            <div className="adduser_input">
              <label> Enter Your Card No.</label>
              <input
                type="text"
                name="CardNumber"
                placeholder="Enter Your Card no."
                onChange={getInputData}
              />
            </div>

            <div className=" adduser_input">
              <label>Upload a file</label>
              <input type="text" name="Profile" placeholder="profile link" onChange={getInputData}/>
            </div>
          </div>

          <div className="adduser_btn">
            <button onClick={() => navigate("/users")}>Cancel</button>
            <button type="submit" onClick={handleSumbit}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
