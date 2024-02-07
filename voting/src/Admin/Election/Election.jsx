import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_ELECTION_PENDING } from "../../Redux-Saga/admin/Action/electionAction";

const Election = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const selector = useSelector((state)=>state.adminReducer.data)
  
  useEffect(()=>{
    dispatch({type:GET_ELECTION_PENDING})
  },[])

  console.log(selector);

  return (
    <>
      <div className="form_bg">
        <button onClick={() => navigate("/home")}>Back</button>
        <div className="form_sear">
          <svg
            className=""
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="search"
            id="default-search"
            placeholder="Search Election ..."
            required=""
          />
          <button type="submit">Search</button>
        </div>
        <button onClick={() => navigate("/addelection")}>Add Election </button>
      </div>

      {/* elction */}
      <div className="election_bg">
        <h2>ELECTION DETAIL</h2>
        <div className="election">
          <table>
            <thead>
              <tr>
                <th>ELECTION NAME</th>
                <th>REGISTER DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
            {
              selector?.map((e)=>{
                return(
                  <tr key={e._id}>
                <td>{e.ElectionName}</td>
                <td>{e.RegisterDate}</td>
                <td>
                  <div className="election_btn">
                    <button>
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                      </svg>
                    </button>
                    <button onClick={() => navigate("/signup")}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
                        <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Election;
