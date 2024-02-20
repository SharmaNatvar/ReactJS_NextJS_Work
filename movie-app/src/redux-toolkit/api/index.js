import axios from "axios";
import { BASEURL, headers } from "../constant";




export const getDataFromApi = async (endPointUrl , params)=>{
try {
    const {data} = await axios.get(BASEURL+endPointUrl,{
        headers ,
        params
    })
    return data
} catch (err) {
    console.log(err);
    return err
}
}