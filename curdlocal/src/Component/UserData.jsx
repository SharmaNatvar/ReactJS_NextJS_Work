import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const [userInput, setUserInput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataLocal = JSON.parse(localStorage.getItem("data")) || [];
    setUserInput(userDataLocal);
  }, []);

  const dataDelete = (index) =>{
    let deleteUserData = userInput.filter(( _ , ind )=> ind !== index)
    setUserInput(deleteUserData)
    localStorage.setItem('data' , JSON.stringify(deleteUserData));
  }



  return (
    <>
      {userInput?.map((e, index) => {
        return (
          <>
            <tr>
              <td>{index + 1}</td>

              <td>{e.userName}</td>
              <td>{e.userEmail}</td>
              <td>{e.userAddress}</td>
              <td>{e.userPhone}</td>
              <td>
                <div className="d-flex gap-3">
                  <span className="badge btn bg-success" onClick={()=>navigate(`/from/${index}`)}>Edit</span>
                  <span
                    className="badge btn bg-danger"
                    onClick={() => dataDelete(index)}
                  >
                    Delete
                  </span>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default UserData;
