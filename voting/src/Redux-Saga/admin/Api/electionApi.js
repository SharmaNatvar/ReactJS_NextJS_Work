import axios from "axios"
import { BASE_URL, DELETE_ELECTION_ENDPOINT, GET_ELECTION_ENDPOINT, POST_ELECTION_ENDPOINT, PUT_ELECTION_ENDPOINT } from "../../constant"


// get api
export const getElectionApiData = async() =>{
   return(
    await axios.get(BASE_URL+ GET_ELECTION_ENDPOINT)
    .then((res)=>{
        console.log(res , 'getElectionApiData');
        const data = res.data.Data
        const status = res.status
        
        console.log(data , status , 'getElectionApiData');
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'getElectionApiData');
    })
   )
} 


// POST api
export const postElectionApiData = async(action) =>{
   return(
    await axios.post(BASE_URL+ POST_ELECTION_ENDPOINT , action.payload)
    .then((res)=>{
        console.log(res , 'postElectionApiData');
        const data = res.data.Data
        const status = res.status
        
        console.log(data , status , 'postElectionApiData');
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'postElectionApiData');
    })
   )
}  



// updata api
export const putElectionApiData = async(action) =>{
   return(
    await axios.get(BASE_URL+ PUT_ELECTION_ENDPOINT + action.payload.id + action.payload)
    .then((res)=>{
        console.log(res , 'putElectionApiData');
        const data = res.data.Data
        const status = res.status
        
        console.log(data , status , 'putElectionApiData');
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'putElectionApiData');
    })
   )
}  



// delete api
export const deleteElectionApiData = async(action) =>{
   return(
    await axios.get(BASE_URL+ DELETE_ELECTION_ENDPOINT + action.payload.id)
    .then((res)=>{
        console.log(res , 'deleteElectionApiData');
        const data = res.data.Data
        const status = res.status
        
        console.log(data , status , 'deleteElectionApiData');
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'deleteElectionApiData');
    })
   )
}  