import axios from "axios"
import { BASE_URL, LOGIN_ENDPOINT,  } from "../../constant"



export const postApiData = (action) =>{
    console.log(action.payload);
   return(
    axios.post(BASE_URL+LOGIN_ENDPOINT, action.payload)
    .then((res)=>{
        const data = res.data.data
        const status = res.status
        return{
            data,
            status
        }
    }).catch((err)=>{
        console.log(err,'postApiData');
    })
   )
}  