import React from "react";
// import Button from "./Button";
import ColText from "./ColText";
import HeroBook_1 from '../asstes/homeBook1.jpg';
import HeroBook_2 from '../asstes/homeBook2.jpg';
import HeroBook_3 from '../asstes/homeBook3.jpg';


let Hero = () =>{
    return(
        <>
            <section className="home section" id="home">
                <div className="home_container container d-flex">

                    <div className="col-5">
                        <ColText
                            heading = {<h1 class="home_title"> Browse & <br/> Select E-Book </h1>}
                            para = {'find the best e-book from your favorite writer Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quia.'}
                            buttonLink = {<a href="#">Explore Now</a>}
                        />
                    </div>
                    <div className="col-7">
                        <div className="home_image">
                            <div className="home_swiper swiper">
                                <div className="swiper-wrapper">
                                    <article className="home_article swiper-slide">
                                        <img src={HeroBook_1} alt="image of Book" className="home_img"/>
                                    </article>

                                    <article className="home_article swiper-slide">
                                        <img src={HeroBook_2} alt="image of Book" className="home_img"/>
                                    </article>

                                    <article className="home_article swiper-slide">
                                        <img src={HeroBook_3} alt="image of Book" className="home_img"/>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </>
    )
}

export default Hero