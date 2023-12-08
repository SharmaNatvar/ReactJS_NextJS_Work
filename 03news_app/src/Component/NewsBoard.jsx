import React, { useEffect, useState  } from 'react'
import Newsitem from './Newsitem';

const NewsBoard = ({category ,theme}) => {

    const [newsApi , setNewsApi ] = useState([]);

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
        .then((res)=>res.json())
        .then((data)=> setNewsApi(data.articles))
    },[category])

    // console.table(newsApi)
  return (
    <>
        <div className={`${theme}`}>
            <h1 className='text-center'>Latest<span className='badge bg-danger'>News</span></h1>
            <div className="containerCustom d-flex row">
                {
                    newsApi.map((news,index)=>{
                        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default NewsBoard