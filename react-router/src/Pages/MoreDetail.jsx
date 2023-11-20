import React from "react";
import { useParams } from "react-router-dom";
// import Data from "../Data";

const MoreDetail = () => {

    let {userEmail} = useParams();
    

    let newData = JSON.parse(localStorage.getItem('seleteUser'))

    // let newData = Data.filter((i)=> i.userEmail == userEmail)

    console.log(newData);

  return (<>
    <h1>{newData.userEmail}</h1>
    <h1>{newData.userName}</h1>
    <h1>{newData.userAge}</h1>
    <h1>{newData.userText}</h1>
    <h1>{newData.userAddress}</h1>
  </>);
};

export default MoreDetail;


