import axios from "axios"

export const getApiData = (UrlApi , getUrl) =>{
    return axios.get(UrlApi+getUrl)
    .then((res)=> res.data)
    .catch((err)=> err)
}

export const getApiDataForUpdate = (UrlApi , getUrl,id) =>{
    return axios.get(UrlApi+getUrl+'/'+id)
    // .then((res)=> res.data)
    // .catch((err)=> err)
}

export const postApiData = (UrlApi , postUrl , data) =>{
    axios.post(UrlApi+postUrl,data)
    .then((res)=>console.log(res))
}

export const putApiData = (UrlApi , putUrl ,id , data) =>{
    axios.put(UrlApi+putUrl+'/'+id,data)
    .then((res)=>console.log(res))
}

export const deleteApiData = (UrlApi , deleteUrl ,id ) =>{
    axios.delete(UrlApi+deleteUrl+id)
    .then((res)=>console.log(res))
}