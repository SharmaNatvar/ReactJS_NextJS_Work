import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate()

    // set data in useState
  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

//   post data
  const getInputData = () => {
    if (data.age >= 1 && data.age <= 100 && data.firstName && data.lastName) {
      axios.post("http://localhost:3333/user", data).then((res) => {
        console.log(res);
        navigate('/Table')
      });
    } else {
        Swal.fire("Invaild data!");
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">AddUser</h1>
      <div className="border border-dark p-4 m-auto" style={{ width: "50vw" }}>
        <div class="mb-3">
          <label class="form-label">first Name</label>
          <input
            type="text"
            class="form-control"
            name="firstName"
            onChange={getData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            onChange={getData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            name="age"
            onChange={getData}
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <button type="button" class="btn btn-success" onClick={getInputData}>
            Done
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>{navigate('/Table')}}>
            Cancle
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
