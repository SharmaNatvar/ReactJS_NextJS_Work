import React from "react";
import Button from "./Button";

let FeatureCard = (props) =>{
    return(
        <>
            <article class="featured_card swiper-slide">
                <img src={props.FeatureImage} alt="image" class="featured_img"/>

                <h2 class="featured_title">{props.FeatureTitle}</h2>
                <div class="featured_prices">
                    <span class="featured_discount">{props.FeatureDiscount}</span>
                    <span class="featured_price">{props.FeaturePrice}</span>
                </div>

                <Button buttonText = {props.FeatureBtn}/>

                <div class="featured_action">
                    <button><i class="ri-search-line"></i></button>
                    <button><i class="ri-heart-3-line"></i></button>
                    <button><i class="ri-eye-line"></i></button>
                </div>
            </article>
        </>
    )
}

export default FeatureCard