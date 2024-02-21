import React, { useState } from 'react'
import Container from '../../Components/Container';
import SwitchBtn from '../../Components/SwitchBtn';
import Carousel from '../../Components/Carousel';
import useFetch from '../../Hook/useFetch';

const HomePopular = () => {

    const [endpoint , setEndpoint] = useState('movie')
    const {data , loading } = useFetch(`/${endpoint}/popular`)

    console.log(data);
    const onBtnChange = (btn)=>{
        setEndpoint(btn === "Movies" ? 'movie': 'tv')
    }

  return (
    <>
 <div className="carouselSection">
                <Container>
                    <span className="carouselTitle">
                        Popular Choise
                    </span>
                    <SwitchBtn data={["Movies","TV Shows"]} onBtnChange={onBtnChange}/>
                </Container>
                <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
            </div>
    </>
  )
}

export default HomePopular