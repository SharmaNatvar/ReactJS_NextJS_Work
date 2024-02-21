import React from 'react'
import './Common.scss'
import Container from '../Components/Container'



const NotFound = () => {
  return (
    <>
 <div className="pageNotFound">
            <Container>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </Container>
        </div>
    </>
  )
}

export default NotFound