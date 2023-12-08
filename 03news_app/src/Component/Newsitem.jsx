import React from 'react'
import news from '../assets/news.webp'

const Newsitem = ({title , description , src , url}) => {
    // console.log(props);
  return (
    <>
        <div className='col-3 mb-3 ' style={{paddingRight: '2px', paddingLeft: '2px'}}>
            <div className="card p-1 cardStyle" style={{height:'450px'}}>
                <img src={src?src:news} className="card-img-top" alt="news img" style={{height:'150px'}}/>
                <div className="card-body" style={{height:'250px'}}>
                    <h5 className="card-title">{title.slice(0,45)}..</h5>
                    <p className="card-text">{description?description.slice(0,80):'news s, Bollywood, Cricket, Video and Bre..'}..</p>
                </div>
                <a href={url} className="btn btn-primary" target='_blank'>More ..</a>
            </div>
        </div>
    </>
  )
}

export default Newsitem