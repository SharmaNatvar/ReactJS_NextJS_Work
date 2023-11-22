import React from 'react'
import ImageSide from './ImageSide'
import logo from '../asstes/logo1.png'

const Footer = () => {
  return (
    <>
        <div className='d-flex'>
            <div class="logo_div">
                <ImageSide ImageCall={logo}/>
                {/* <img src="./asstse/logo1.png" alt="logo"/> */}
                <p>@2023 Krishna Sharma</p>
            </div>
            <div class="d-flex">
                <div class="footer_div2">
                    <h3>Products</h3>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>Pricing</li></a>
                </div>
                <div class="footer_div3">
                    <h3>Abouts</h3>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>Pricing</li></a>
                </div>
                <div class="footer_div4">
                    <h3>Blogs</h3>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>Pricing</li></a>
                </div>
                <div class="footer_div4">
                    <h3>Get in Touch</h3>
                    <a href="#"><li>Question or FeedBack?</li></a>
                    <a href="#"><li>We'll love to help you</li></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer