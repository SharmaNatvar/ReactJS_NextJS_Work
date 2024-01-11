import React, { useEffect, useState } from "react";
// import swal from 'sweetalert'
import UserData from "../Component/UserData";

const Home = () => {
  const [userInput, setUserInput] = useState([]);

  useEffect(() => {
    const userDataLocal = JSON.parse(localStorage.getItem("data")) || [];
    setUserInput(userDataLocal);
}, []);

  return (
    <>
      {/* <Data/>  */}
      <hr />
      <h1 className="my-5 text-center">UserData</h1>
      {userInput.length > 0 ? (
        <div className="card bg-secondary p-2">
          <table className="table table-hover ">
            <thead>
              <tr>
              <th>Sr.No.</th>

                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <UserData />
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center">Empty data</h2>
      )}
      {/* {
                    inputData?.map((e)=>{
                        return(
                            <>
                            <h1>{e.fName}</h1>
                            <h1>{e.lName}</h1>
                            </>
                        )
                    })
                } */}
    </>
  );
};

export default Home;
