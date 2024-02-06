import React from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {

  const navigate = useNavigate();

  return (
    <>
        <div className="adduser_bg">
          <div className="adduser">
              <h1 >Add User</h1>
                  <h3 > Indian Resident Elector</h3>

                <div className="adduser_box">
                      <div className="adduser_input">
                        <label> Your Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                          />
                      </div>

                      <div className="adduser_input">
                        <label> Your BirthDate</label>
                          <input
                            type="date"
                            name="date"
                          />
                      </div>

                      <div className="adduser_input">
                        <label>Email address</label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                          />
                      </div>

                      <div className="adduser_input">
                        <label> Enter Your Phone No.</label>
                          <input
                            name="number"
                            type="text"
                            placeholder="Enter Your Phone"
                          />
                      </div>

                      <div className="adduser_input">
                        <label> Your Address</label>
                          <input
                            type="text"
                            name="address"
                            placeholder="Enter Your Address"
                          />
                      </div>

                      <div className="adduser_input">
                        <label > Enter Your Gender</label>
                          <input
                            type="text"
                            name="sex"
                            placeholder="Enter Your Gender"
                          />
                      </div>

                      <div className="adduser_input">
                        <label > Enter Your Card No.</label>
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Enter Your Card no."
                          />
                      </div>

                   
                      <div className=" adduser_img">
<label>Upload a file</label>

                            <input
                              type="file"
                              id="logo"
                              name="profile"
                            />
                      </div>
                </div>

              <div className="adduser_btn">
                <button
                  onClick={() => navigate("/users")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                >
                  Add
                </button>

              </div>
            </div>
          </div>
    </>
  );
};

export default AddUsers;
