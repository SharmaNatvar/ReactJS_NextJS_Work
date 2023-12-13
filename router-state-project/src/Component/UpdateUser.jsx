import React, { useEffect, useState } from 'react'
import {  getApiDataForUpdate, putApiData } from '../Api/ApiFun';
import { PostUrl, UrlApi, getUrl, putUrl} from '../ApiUrl';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateUser = () => {

    const [user, setUser] = useState({});
    const navigate  = useNavigate();
    const {id} = useParams()

    
    const getUserData = async()=>{
        let result = await getApiDataForUpdate(UrlApi,getUrl,id)
        setUser(result.data);
        // console.log(result.data);
    }


    useEffect(()=>{
        getUserData()
    },[])

    const updateInputData = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const updateData = async() =>{
        await putApiData(UrlApi, putUrl, id,user)
        console.log(user);
        navigate('/Curd');
    }

    const cancelFun = () =>{
        navigate('/Curd') 
    }
    // console.log(user);

  return (
    <>
        <h2>Update User</h2>
        <div className='p-3 m-4 border border-black rounded' style={{width:'400px'}}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='nameInput' className="form-control" value={user.nameInput} onChange={e=> updateInputData(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name='emailInput' className="form-control" value={user.emailInput} onChange={e => updateInputData(e)}/>
            </div>
            <div className='d-flex justify-content-evenly'>
                <button type="submit" className="btn btn-dark" onClick={cancelFun}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={updateData}>Submit</button>
            </div>
        </div>
    </>
  )
}

export default UpdateUser