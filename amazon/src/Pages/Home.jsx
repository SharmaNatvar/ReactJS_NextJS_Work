import React, { useEffect, useState } from 'react'
import data from '../data'

const Home = () => {

    let [dataArr , setDataArr] = useState(data)

    let dataResult = dataArr.filter((i)=>i.availablity!=false)

    useEffect(()=>{
        setDataArr(dataResult)
    },[])
    // console.log(dataArr.price , 'array data');
  return (
    <>
        <div className='d-flex row '>
            {
                dataArr.map((e)=>{
                    return(
                        <div className="card m-2" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h2 className="card-title">{e.productName}</h2>
                                <h6 className="card-subtitle mb-2 text-muted">{`$ ${e.price}`}</h6>
                                <p className="card-text">{e.desc}</p>
                                {/* <a href="#" className="card-link">Card link</a> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </>
  )
}

export default Home