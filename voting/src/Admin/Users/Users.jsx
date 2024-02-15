import React, { useEffect } from "react";
import "../Users/user.css";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_PENDING } from "../../Redux-Saga/admin/Action/userAction";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const selector = useSelector((state)=>state.adminReducer.data)
  
  useEffect(()=>{
    dispatch({type:GET_USER_PENDING})
  },[])

  console.log(selector);

  return (
    <>
      <div>
          <div className="form_bg">
            <button className="form_btn" onClick={() => navigate("/home")}>Back</button>
            <div className="form_sear">
              <svg
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
                placeholder="Search User..."
              />
              <button type="submit">Search</button>
            </div>
            <button className="form_btn" onClick={() => navigate("/addusers")}>Add User</button>
          </div>

        {/* card */}
        <div className="card_bg">
        {
          selector?.map((e)=>{
            return(

          <div className="card">
            <div className="card_Padmin">
              <p>{e.Role}</p>
            </div>
            <div className="cardProfile">
              <img src={e.Profile ? e.Profile : profile} alt="image"  />
              <div className="cardProfile_txt">
                <h3 >{e.Name}</h3>
                <p >{e.Sex  ? e.Sex : 'Not Upload'}</p>
              </div>
            </div>
            <div className="card_contact">
              <h3 >{e.Phone ? e.Phone : 'Not Upload'}</h3>
              <p >{e.Address ? e.Address : 'Not Upload'}</p>
            </div>
            <div className="card_btn">
              <button onClick={()=>handleDelete()}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                </svg>
              </button>
              <button onClick={()=>navigate('/addusers')}>
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
          </div>
            )
          })
        }
        </div>

      </div>
    </>
  );
};

export default Users;
