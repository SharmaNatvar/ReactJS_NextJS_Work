import axios from "axios";
import { BASE_URL, GET_ENDPOINT } from "../../constant";


export function getData(){
return(
    axios.get(BASE_URL + GET_ENDPOINT)
    .then((res) =>{
        const {data , status} = res
        return{
            data,
            status
        }}
    )
)
}
