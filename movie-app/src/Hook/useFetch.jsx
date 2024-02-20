import React, { useEffect, useState } from 'react'
import { getDataFromApi } from '../redux-toolkit/api';

const useFetch = (endPointUrl) => {
  
  const [data, setData] = useState(null);
  const [loading , setLoading] = useState(null);
  const [error , setError] = useState(null);

  useEffect(()=>{
    setLoading("loading .....");
    setData(null);
    setError(null);

    getDataFromApi(endPointUrl)
    .then((res)=>{
      setLoading(false);
      setData(res);
    })
    .catch((err)=>{
      setLoading(false);
      setError('Something went wrong!');
    })
  },[endPointUrl])
  
  
  return {loading , data , error}
}

export default useFetch