import axios from "axios"
import { BASE_URL, GET_PARTY_ENDPOINT   } from "../../constant"



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