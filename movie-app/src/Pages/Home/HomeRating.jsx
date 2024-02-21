import React, { useState } from 'react'
import Container from '../../Components/Container';
import SwitchBtn from '../../Components/SwitchBtn';
import Carousel from '../../Components/Carousel';
import useFetch from '../../Hook/useFetch';

const HomeRating = () => {

    const [endpoint , setEndpoint] = useState('movie')
    const {data , loading } = useFetch(`/${endpoint}/top_rated`)

    console.log(data);
    const onBtnChange = (btn)=>{
        setEndpoint(btn === "Movies" ? 'movie': 'tv')
    }


  return (
    <>
          <div className="carouselSection">
                <Container>
                    <span className="carouselTitle">
                        Top Show
                    </span>
                    <SwitchBtn data={["Movies","TV Show"]} onBtnChange={onBtnChange}/>
                </Container>
                <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
            </div>
    </>
  )
}

export default HomeRating