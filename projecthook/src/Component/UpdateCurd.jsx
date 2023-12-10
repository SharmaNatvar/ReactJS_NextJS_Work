import axios from 'axios';
import React, {useEffect, useRef , useState} from 'react'



const UpdateCurd = () => {

    const [updateId, setupdateId] = useState()
    const [nameInput, setnameInput] = useState()
    const [emailInput, setEmailInput] = useState()

    useEffect(()=>{
        setupdateId(JSON.parse(localStorage.getItem('id')));
        setnameInput(JSON.parse(localStorage.getItem('name')))
        setEmailInput(JSON.parse(localStorage.getItem('email')))
    },[])




    const updateApi = () =>{
        // console.log(e.target.value,'e');
        // setupdate({ ...update, [e.target.name]: e.target.value });
        axios.put(`https://65751b6fb2fbb8f6509ce42f.mockapi.io/crudUser/${updateId}`,{
            nameInput:nameInput,
            emailInput:emailInput
        })
        // .then((res)=>console.log(res.data))
    }

  return (
    <>
      <h1>Update Curd</h1>
     <form style={{width:'18rem', border:'2px solid black', padding:'1rem'}}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" style={{width:'90%'}} value={nameInput} />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" style={{width:'90%'}} value={emailInput} />
        </div>
        <button type="submit" className="btn btn-success" onClick={updateApi}>Done</button>
        <button type="submit" className="btn btn-danger" >Cancel</button>
     </form>
    </>
  )
}

export default UpdateCurd
