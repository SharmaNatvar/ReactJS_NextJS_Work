import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loginDetail"));
    setData(userData);
  }, []);

  console.log(data, "data");

  return (
    <>
      <div className="profile_bg">
        <h1>Admin Profile</h1>
        <div className="profile" key={data.id}>
          <div className="profile_Padmin">
            <p>admin</p>
            <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-8 3a3 3 0 100-6 3 3 0 000 6z" />
    </svg>

          </div>
          <div className="profileProfile">
            <img src={data.Profile} alt="image" />
          </div>
            <div className="profileProfile_txt">
              <h2>{data.Name}</h2>
              <p>{data.Sex}</p>
            </div>
          <div className="profile_contact">
          <h2>Email : {data.Email}</h2>
            <h3>Phone : {data.Phone}</h3>
            <p>Add : {data.Address}</p>
          </div>
          <div className="profile_info">
          <h2>Card Number : {data.CardNumber}</h2>
            <h3>DOB : {data.DOB}</h3>
          </div>
          <div className="profile_btn">
            <button onClick={() => navigate("/home")}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
