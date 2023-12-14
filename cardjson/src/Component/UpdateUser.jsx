import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams()

    // set data in useState
    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // get data 
    useEffect(() => {
        axios.get(`http://localhost:3333/user/${id}`).then((res) => {
            setData(res.data);
        });
    }, [])

    //   post data
    const getInputData = () => {
    if (data.age >= 1 && data.age <= 100 && data.firstName && data.lastName) {

        axios.put(`http://localhost:3333/user/${id}`, data).then((res) => {
            if(res.status === 200){
                Swal.fire("Update is working");
                navigate('/Table')
            }
        })
    }else {
        Swal.fire({icon: "error",  title: "Invaild data!"});
    }
    };

    return (
        <>
            <h1 className="text-center mt-4"> update user</h1>
            <div className="border border-dark p-4 m-auto" style={{ width: "50vw" }}>
                <div className="mb-3">
                    <label className="form-label">first Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={data.firstName}
                        onChange={getData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={data.lastName}
                        onChange={getData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={data.age}
                        onChange={getData}
                    />
                </div>
                <div className="d-flex justify-content-evenly">
                    <button type="button" className="btn btn-success" onClick={getInputData}>
                        Done
                    </button>
                    <button type="button" className="btn btn-danger"  onClick={()=>{navigate('/Table')}}>
                        Cancle
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdateUser