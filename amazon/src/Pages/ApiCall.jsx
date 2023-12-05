import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {

    const [apiData, setApiData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            // console.table(response.data);
            setApiData(response.data)
        })
    },[])


  return (
    <>
      <h1>Api Call</h1>
      <div className='d-flex row'>

      {

        apiData.map((event)=>{
           return(
            <div className='col-4'>
                <div class="card " style={{width: '18rem'}}>
                    <div class="card-body ">
                        <h2 class="card-title">{event.username}</h2>
                        <h5 class="card-subtitle mb-2 text-muted">{event.name}</h5>
                        <h6 class="text-secondary mb-2 text-muted">{event.email}</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="text-success">{event.address.city},{event.address.zipcode}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
           )
        })

      }
      </div>

    </>
  )
}

export default ApiCall
