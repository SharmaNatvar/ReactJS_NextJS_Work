import React, { useState } from "react";
import UserDelete from "./UserDelete";
import fakeUserName from "../redux-toolkit/api";
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from "../redux-toolkit/slice/userSlice";
import {useSelector} from 'react-redux';


const UserDetails = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state)=> state.users)

    const handleUserName = (userN) =>{  
        console.log(userN); 
        dispatch(addUser(userN))
    }

    const handleDelete = (id ) =>{
        dispatch(removeUser(id))
    }
    
    console.log(selector);
  return (
    <>
      <div className="userDetails_bg">
        <div className="userDetails_text">
          <h2>List Of user</h2>
          <button onClick={() => handleUserName(fakeUserName())}>Add User</button>
        </div>
        <ul>
        {
            selector?.map((e , index)=>{
                return <div className="userSelClass" key={index}>
                <li>{e}</li>
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            })
        }
        </ul>
      </div>
      <hr />
      <UserDelete />
    </>
  );
};

export default UserDetails;
