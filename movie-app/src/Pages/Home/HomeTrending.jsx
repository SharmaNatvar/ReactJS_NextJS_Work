import React, { useState } from 'react'
import Container from '../../Components/Container'
import SwitchBtn from '../../Components/SwitchBtn'
import useFetch from '../../Hook/useFetch'
import Carousel from '../../Components/Carousel'


const HomeTrending = () => {
    const [endpoint , setEndpoint] = useState('day')
    const {data , loading } = useFetch(`/trending/all/${endpoint}`)

    console.log(data);
    const onBtnChange = (btn)=>{
        setEndpoint(btn === "Day" ? 'day': 'week')
    }

    return (
        <>
            <div className="carouselSection">
                <Container>
                    <span className="carouselTitle">
                        Trending
                    </span>
                    <SwitchBtn data={["Day","Week"]} onBtnChange={onBtnChange}/>
                </Container>
                <Carousel data={data?.results} loading={loading}/>
            </div>

        </>
    )
}

export default HomeTrending