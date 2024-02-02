import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { txtDB } from '../fireBaseConfig'

const UserProfile = () => {

    const [data , setData] = useState()
    const loginEmail = JSON.parse(localStorage.getItem('loginEmail'))

    useEffect(()=>{
        async function getFireData(){
            const ref = collection(txtDB , 'userDeatial')
            await getDocs( ref )
        .then((res)=>{
            // console.log(res)
            const result = res.docs.map(val=>({...val.data()})).filter((val)=> val.userEmail === loginEmail)
            console.log(result, loginEmail,'result');
            setData(result)
        })
        }
        getFireData()
    },[])

  return (
    <>
    <Navbar/>
     <h1>UserProfile</h1> 
     {
        data?.map((e)=>{
            return <div>
                <h2>Name = {e.userName}</h2>
                <h2>Email = {e.userEmail}</h2>
                <h2>addhar Number = {e.addharNumber}</h2>
                <h2>phone = {e.number}</h2>
                <h2>address = {e.address}</h2>
            </div>
        })
     }
    </>
  )
}

export default UserProfile
