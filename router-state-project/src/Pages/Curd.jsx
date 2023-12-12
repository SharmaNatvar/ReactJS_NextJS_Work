import React, { useEffect, useState } from 'react'
import { UrlApi, getUrl } from '../ApiUrl'
import { getApiData } from '../Api/ApiFun'
import { Link } from 'react-router-dom'

const Curd = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    getApiData(UrlApi, getUrl)
      .then((res) => setApiData(res))
  }, [])



  return (
    <>
      <h1 className='text-center'>Curd</h1>
      <div className='d-flex bg-primary-subtle justify-content-between p-3'>
        <h2>User Detail</h2>
        <Link to={'/Curd/AddUser'}>
          <button className='btn btn-outline-dark'>Add user</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr key={apiData.id}>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody >
          {
            apiData?.map((e , index) => {
              return (
                <>
                  <tr key={e.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.nameInput}</td>
                    <td>{e.emailInput}</td>
                    <td><button type="button" className="btn btn-info btn-sm mx-1">view</button>
                    <button type="button" className="btn btn-success btn-sm mx-1">Update</button>
                    <button type="button" className="btn btn-danger btn-sm mx-1">Delete</button></td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default Curd
