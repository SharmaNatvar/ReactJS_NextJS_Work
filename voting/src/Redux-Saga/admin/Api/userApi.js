import axios from "axios"
import { BASE_URL, GET_USER_ENDPOINT } from "../../constant"



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