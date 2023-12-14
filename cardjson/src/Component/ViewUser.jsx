import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewUser = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // get data
  useEffect(() => {
    axios.get(`http://localhost:3333/user/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  //   console.log(Array.isArray(data));
  return (
    <>
      <h1 className="text-center mt-4"> User Detail</h1>
      <div
        className="d-flex  flex-column m-auto border border-dark p-4 m-4"
        style={{ width: "40vw" }}
      >
        <p className="d-flex align-items-center fs-4">
          <samp className="text-dark fs-2">firstName: </samp>
          {data.firstName}
        </p>
        <p className="d-flex align-items-center fs-4">
          <samp className="text-dark fs-2">lastName :</samp>{data.lastName}
        </p>
        <p className="d-flex align-items-center fs-4">
          <samp className="text-dark fs-2">age :</samp>{data.age}
        </p>
        <button type="button" class="btn btn-danger" onClick={()=>{navigate('/Table')}}>
            Back
          </button>
      </div>
    </>
  );
};

export default ViewUser;
