// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_PROGRESS } from "./Redux-Saga/user/Action/action";

function App() {
  // const [apiData , setApiData] = useState()
  const dispatch = useDispatch()
  const selector = useSelector((state)=>console.log(state))
  console.log(selector);

  // console.log(apiData);
  const getApiData =() =>{
    dispatch({type:GET_PRODUCT_PROGRESS})
  }
  
  return (
    <>
     <h1>this is app</h1> 
<button onClick={getApiData}>getData</button>
    </>
  );
}

export default App;
