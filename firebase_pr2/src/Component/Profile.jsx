import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { txtDB } from '../fireBaseConfig'
import Navbar from './Navbar'

const Profile = () => {
    const [data , setData] = useState()
    const loginEmail = JSON.parse(localStorage.getItem('loginEmail'))

    useEffect(()=>{
        const handleGetTxt = async()=>{
            const txtRef = collection(txtDB , 'userDetail')
            const res = await getDocs(txtRef)
            const result = res.docs.map(val=>({...val.data(),id:val.id})).filter(val => val.email  === loginEmail) 
            setData(result)
        }
        handleGetTxt()
    },[])
    console.log(Array.isArray(data));
     
  return (
    <>
    <Navbar/>
     <h1 className='headilne'>user Profile</h1> 
{
    data?.map((val)=>{
        return <div>
            <h2>Name = {val.name}</h2>
            <h2>Email = {val.email}</h2>
            <h2>Addhar = {val.addharNumber}</h2>
            <h2>Number = {val.number}</h2>
        </div>
    })
}
    </>
  )
}

export default Profile
