import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, json } from 'react-router-dom';


const CurdCard = () => {

    const [curdData, setCurdData] = useState([]);

    const getData = ()=>{
        axios.get('https://65751b6fb2fbb8f6509ce42f.mockapi.io/crudUser')
        .then((res)=>setCurdData(res.data));
    }

   useEffect(()=>{
    getData();
   },[]);

    function deleteData(id) {
        axios.delete(`https://65751b6fb2fbb8f6509ce42f.mockapi.io/crudUser/${id}`)
        .then(()=>{
            // setCurdData(curdData.filter((e)=>e.id !== id));
            getData()
        })
    }

    function setlocalStorage(id , name , email){
        localStorage.setItem('id',JSON.stringify(id));
        localStorage.setItem('name',JSON.stringify(name));
        localStorage.setItem('email',JSON.stringify(email));
    }


  return (
    <>
     {
        curdData.map((event)=>{
            return(
                <div className="card mt-4" key={event.id} style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{event.nameInput}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{event.emailInput}</h6>
            <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={'/UpdateCurd'}><button className="btn btn-outline-success btn-sm" onClick={()=>{setlocalStorage(event.id,event.nameInput,event.emailInput)}}>update</button></Link>
            <button className="btn btn-outline-danger btn-sm" onClick={()=>deleteData(event.id)}>Delete</button>
        </div>
     </div> 
            )
        })
     }
    </>
  )
}

export default CurdCard
