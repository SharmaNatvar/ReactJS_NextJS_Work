import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const [setValue, setSetValue] = useState({});
  const { index } = useParams();

  const getData = (e) => {
      setSetValue({ ...setValue, [e.target.name]: e.target.value });
  };

  const sumbitData = () => {
    const userDataLocal = JSON.parse(localStorage.getItem("data")) || [];
    const newData = [...userDataLocal, setValue];
    localStorage.setItem("data", JSON.stringify(newData));
    swal({
      icon: "success",
      text: "Add success",
      button: navigate("/"),
    });
  };

  useEffect(() => {
    const userDataLocal = JSON.parse(localStorage.getItem("data"));
    if(index !== undefined){
      setSetValue(userDataLocal[index]);
    }
  }, [index]);

  const updateData = () => {
    const userDataLocal = JSON.parse(localStorage.getItem("data"));
    if (index !== undefined) {
    const updateData = [...userDataLocal];
    updateData[index] = setValue;
    localStorage.setItem("data", JSON.stringify(updateData));
    swal({
      icon: "success",
      text: "UpDate success",
      button: navigate("/"),
    });
  }
  };

  return (
    <>
      <h1 className="text-center">
        {index  ? "Edit" : "Add "} user
      </h1>
      <div className="d-flex my-5 justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>

      {/* //from  */}

      <div className="card border-primary p-5 m-5">
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="userName"
            value={setValue.userName || " "}
            onChange={ getData}
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="user email"
            name="userEmail"
            value={setValue.userEmail ||  " " }
            onChange={getData}
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="Address">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="user Address"
            name="userAddress"
            value={setValue.userAddress ||  " "}
            onChange={getData}
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="phone">
            phone
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="user phone"
            name="userPhone"
            value={ setValue.userPhone || " " }
            onChange={getData}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={index  ? updateData : sumbitData }
          >
            {index  ? "Update": "Add" }User
          </button>
        </div>
      </div>
    </>
  );
};

export default UserForm;
