import React from 'react'
import './Common.scss'
import Container from './Container'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='footerBg'>
        <Container>
          <ul className='footMenuItems'>
            <li className='footMenuItem'>Terms of Use</li>
            <li className='footMenuItem'>Privacy-Policy</li>
            <li className='footMenuItem'>About</li>
            <li className='footMenuItem'>Blog</li>
            <li className='footMenuItem'>FAQ</li>
          </ul>
          <div className='footInfoText'>
            Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium! dolor sit amet consectetur adipisicing elit. Eaque tempora excepturi nisi alias amet totam nostrum quis placeat consequuntur laborum assumenda commodi sapiente ipsa, illo quidem fugiat dignissimos corrupti earum quo blanditiis quasi nemo ratione?
          </div>
          <div className='footSocialIcons'>
            <span className='footIcon'><FaFacebookF /></span>
            <span className='footIcon'><FaInstagram /></span>
            <span className='footIcon'><FaTwitter /></span>
            <span className='footIcon'><FaLinkedin /></span>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer