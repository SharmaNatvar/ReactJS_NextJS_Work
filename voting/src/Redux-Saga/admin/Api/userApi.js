import axios from "axios"
import { BASE_URL, DELETE_USER_ENDPOINT, GET_USER_ENDPOINT, POST_USER_ENDPOINT, PUT_USER_ENDPOINT } from "../../constant"



// GET API
export const getUserApiData = async() =>{
   return(
    await axios.get(BASE_URL+ GET_USER_ENDPOINT)
    .then((res)=>{
        console.log(res , 'getUserApiData');
        const data = res.data.Data
        const status = res.status
        
        console.log(data , status , 'getUserApiData');
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'getUserApiData');
    })
   )
}  



// POST api
export const postUserApiData = async(action) =>{
    return(
     await axios.post(BASE_URL+ POST_USER_ENDPOINT , action.payload)
     .then((res)=>{
         console.log(res , 'postUserApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'postUserApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'postUserApiData');
     })
    )
 }  
 
 
 
 // updata api
 export const putUserApiData = async(action) =>{
    return(
     await axios.get(BASE_URL+ PUT_USER_ENDPOINT + action.payload.id + action.payload)
     .then((res)=>{
         console.log(res , 'putUserApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'putUserApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'putUserApiData');
     })
    )
 }  
 
 
 
 // delete api
 export const deleteUserApiData = async(action) =>{
    return(
     await axios.get(BASE_URL+ DELETE_USER_ENDPOINT + action.payload.id)
     .then((res)=>{
         console.log(res , 'deleteUserApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'deleteUserApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'deleteUserApiData');
     })
    )
 }  