import React, { useState } from 'react'
import { postApiData } from '../Api/ApiFun';
import { PostUrl, UrlApi} from '../ApiUrl';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
    const [user, setUser] = useState({});
    const navigate  = useNavigate();
    

    const getInputData = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }


    const postData = async() =>{
        await postApiData(UrlApi,PostUrl,user)
        // history.push('/Curd')
        navigate('/Curd')
    }

    return (
        <>
            <div className='p-3 m-4 border border-black rounded' style={{width:'400px'}}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='nameInput' className="form-control" onChange={getInputData}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='emailInput' className="form-control" onChange={getInputData}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
            </div>
        </>
    )
}
