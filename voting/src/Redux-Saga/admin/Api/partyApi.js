import axios from "axios"
import { BASE_URL, DELETE_PARTY_ENDPOINT, GET_PARTY_ENDPOINT, POST_PARTY_ENDPOINT, PUT_PARTY_ENDPOINT   } from "../../constant"


// get api
export const getPartyApiData = async() =>{
   return(
    await axios.get(BASE_URL+ GET_PARTY_ENDPOINT)
    .then((res)=>{
        const data = res.data.Data
        const status = res.status
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'getPartyApiData');
    })
   )
}  



// POST api
export const postPartyApiData = async(action) =>{
    return(
     await axios.post(BASE_URL+ POST_PARTY_ENDPOINT , action.payload)
     .then((res)=>{
         console.log(res , 'postPartyApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'postPartyApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'postPartyApiData');
     })
    )
 }  
 
 
 
 // updata api
 export const putPartyApiData = async(action) =>{
    return(
     await axios.get(BASE_URL+ PUT_PARTY_ENDPOINT + action.payload.id + action.payload)
     .then((res)=>{
         console.log(res , 'putPartyApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'putPartyApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'putPartyApiData');
     })
    )
 }  
 
 
 
 // delete api
 export const deletePartyApiData = async(action) =>{
    return(
     await axios.get(BASE_URL+ DELETE_PARTY_ENDPOINT + action.payload.id)
     .then((res)=>{
         console.log(res , 'deletePartyApiData');
         const data = res.data.Data
         const status = res.status
         
         console.log(data , status , 'deletePartyApiData');
         return{
             data,
             status
         }
     }).catch((err)=>{
         console.log(err,'deletePartyApiData');
     })
    )
 }  