import axios from "axios"

export const getApiData = (UrlApi , getUrl) =>{
    return axios.get(UrlApi+getUrl)
    .then((res)=> res.data)
    .catch((err)=> err)
}

export const postApiData = (UrlApi , postUrl , data) =>{
    axios.post(UrlApi+postUrl,data)
    .then((res)=>console.log(res))
}