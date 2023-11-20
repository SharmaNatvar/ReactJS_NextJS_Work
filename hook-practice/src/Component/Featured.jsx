import React from "react";
import Book_1 from '../asstes/book-1.png';
import Book_2 from '../asstes/book-2.png';
import Book_3 from '../asstes/book-3.png';
import Book_4 from '../asstes/book-4.png';
import FeatureCard from "./FeatureCard";

let Featured = () =>{
    return(
        <>
            <section class="featured section" id="featured">
                <h2 class="section_title">Featured Books</h2>

                <div class="featured_container container">
                    <div class="featured_swiper swiper" >
                        <div class="swiper-wrapper">
                            {/* <!-- 1 --> */}
                            <FeatureCard
                                FeatureImage = {Book_1}
                                FeatureTitle = 'Featured Book'
                                FeatureDiscount = {'$11.99'}
                                FeaturePrice = {'$19.99'} 
                                FeatureBtn = {'Add to Card'}
                            />

                            {/* <!-- 2 --> */}
                            <FeatureCard
                                FeatureImage = {Book_2}
                                FeatureTitle = 'Featured Book'
                                FeatureDiscount = {'$12.99'}
                                FeaturePrice = {'$29.99'} 
                                FeatureBtn = {'Add to Card'}
                            />

                            {/* <!-- 3 --> */}
                            <FeatureCard
                                FeatureImage = {Book_3}
                                FeatureTitle = 'Featured Book'
                                FeatureDiscount = {'$12.99'}
                                FeaturePrice = {'$29.99'} 
                                FeatureBtn = {'Add to Card'}
                            />

                            {/* <!-- 4 --> */}
                            <FeatureCard
                                FeatureImage = {Book_4}
                                FeatureTitle = 'Featured Book'
                                FeatureDiscount = {'$12.99'}
                                FeaturePrice = {'$29.99'} 
                                FeatureBtn = {'Add to Card'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured