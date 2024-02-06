import React from 'react'
import { Link } from 'react-router-dom'
import vSign from '../../assets/danger.png'

const SignUp = () => {
  return (
    <>
     <div className="logo_bg ">
        <div className="logo_box">
          <img src={vSign} className="logo" alt="Logo" />
          <h3>No Services</h3>
          <p> Voting App Make Things Digital</p>
          <div className="button_box">
            <Link to="/login">
              <button
                type="button"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
