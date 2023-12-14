import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();

  // get data from api
  useEffect(() => {
    axios.get("http://localhost:3333/user").then((res) => setApiData(res.data));
  }, []);


//   delete data 
const deleteData = (id) =>{
    axios.delete(`http://localhost:3333/user/${id}`);

    setApiData(apiData.filter((e)=> e.id !== id))
}

  return (
    <>
      <h1 className="mt-4 text-center">Table</h1>
      <div className="d-flex justify-content-end mx-3">
        <Link to={'/Table/AddUser'}>
            <button type="button" className="btn btn-dark">Add user</button>
            </Link>
      </div>
      <table
        className="table table-bordered mt-4 m-auto"
        style={{ width: "95vw" }}
      >
        <thead>
          <tr className="text-center">
            <th scope="col" className="bg-dark text-white">
              #
            </th>
            <th scope="col" className="bg-dark text-white">
              First
            </th>
            <th scope="col" className="bg-dark text-white">
              Last
            </th>
            <th scope="col" className="bg-dark text-white">
              age
            </th>
            <th scope="col" className="bg-dark text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody >
          {apiData?.map((e, index ) => {
            return (
              <tr key={e.id} className="">
                <th>{index+1}</th>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.age}</td>
                <td className="d-flex justify-content-center">
                <Link to={`/Table/ViewUser/${e.id}`}><button type="button" className="btn-sm mx-1 btn btn-outline-info">View</button></Link>
                <Link to={`/Table/UpdateUser/${e.id}`}><button type="button" className="btn-sm mx-1 btn btn-outline-success">Update</button></Link>
                <button type="button" className="btn-sm mx-1 btn btn-outline-danger" onClick={()=>deleteData(e.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
