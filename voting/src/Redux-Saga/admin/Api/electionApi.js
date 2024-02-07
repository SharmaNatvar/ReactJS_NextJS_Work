import axios from "axios"
import { BASE_URL, GET_ELECTION_ENDPOINT } from "../../constant"



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