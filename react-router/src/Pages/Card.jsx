import React, { useState } from "react";
import  Data  from "../Data";
import { Link, useNavigate } from "react-router-dom";
import MoreDetail from "./MoreDetail";
// import JsonData from "../JsonData";

const Card = () =>{

    const [data,setData] = useState({})

    const [newData, setNewData] = useState(Data)

    const nav = useNavigate()

    let updataValue = (val) => {
        let user = {...data , [val.target.name]:val.target.value}
        setData(user)
        // console.log(user);
    }

    let userDataSumbit = (e) => {
        if(e.userName && e.userAge && e.userEmail && e.userAddress && e.userText){
            let newUser = [...newData,{userName : e.userName , userAge : e.userAge, userEmail:  e.userEmail, userAddress: e.userAddress , userText : e.userText}]
            setNewData(newUser)
            console.log(e);
        }else{
            alert("enter poper data")
        }
    }

    let MoreDetail =(user) =>{
        localStorage.setItem('seleteUser', JSON.stringify(user));
        nav(`/${user.userEmail}`)
    }

    let deleteDetail =(val) =>{
        let newUser = newData.filter((i)=>i.userEmail != val.userEmail)
        setNewData(newUser)
    }


    return(
        <>
            <div className="p-4 ">
                <input type="text" name="userName" placeholder="enter your name" onChange={updataValue}></input><br/>
                <input type="number" name="userAge" placeholder="enter your number" onChange={updataValue}></input><br/>
                <input type="email" name="userEmail" placeholder="enter your email" onChange={updataValue}></input><br/>
                <input type="text" name="userAddress" placeholder="enter your address" onChange={updataValue}></input><br/>
                <input type="text" name="userText" placeholder="enter your message" onChange={updataValue}></input><br/>
                <button type="button" onClick={()=> userDataSumbit(data)}>click</button>
            </div>
            <div className="d-flex row">
                {
                    newData.map((val)=>{
                        return(
                            <div className="card col-4" >
                                <div className="card-body">
                                    <h5 className="card-title">{val.userName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" onClick={()=> MoreDetail(val)} className="card-link">Card link</button>
                                    <button type="button" onClick={()=> deleteDetail(val)} className="card-link">delete Data</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Card

{/* <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="card-link">Card link</Link>
                    <Link to="#" className="card-link">Another link</Link>
                </div>
            </div> */}