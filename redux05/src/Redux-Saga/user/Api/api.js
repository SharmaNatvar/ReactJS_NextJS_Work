import axios from "axios"
import { BASEURL, DELETE_ENDPOINT, GET_ENDPOINT, POST_ENDPOINT, PUT_ENDPOINT } from "../../constant"

// get data
export const Get_Data = () =>{
    console.log('api get data');

    return(
        axios.get( BASEURL+ GET_ENDPOINT)
        .then((res)=>{
            console.log(res , 'api get data');
            const data = res.data;
            const status = res.status;
            console.log(data , 'api get data');
            return{
                data,status
            };
        }).catch((err)=>{
            console.log(err);
        })
    )
} 


// post data
export const Post_Data = async(action) =>{
    return(
        axios.post( BASEURL+ POST_ENDPOINT, action.payload)
        .then((res)=>{
            const data = res.data;
            const status = res.status;
            return{
                data,status
            };
        }).catch((err)=>{
            console.log(err);
        })
    )
} 


// updata data
export const Put_Data = async(action) =>{
    console.log(action,'api action');
    return(
        axios.put( BASEURL+ PUT_ENDPOINT + action.payload.id + action.payload)
        .then((res)=>{
    console.log(res,'api res');

            const data = res.data;
            const status = res.status;
            return{
                data,status
            };
        }).catch((err)=>{
            console.log(err);
        })
    )
} 


// delete data
export const Delete_Data = async(action) =>{
    return(
        axios.delete( BASEURL+ DELETE_ENDPOINT + action.payload.id )
        .then((res)=>{
            const data = action.payload.id ;
            const status = res.status;
            return{
                data,status
            };
        }).catch((err)=>{
            console.log(err);
        })
    )
} 