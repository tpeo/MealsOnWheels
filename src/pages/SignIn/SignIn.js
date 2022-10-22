import React from 'react'
import mowLogo from "../../files/MoWLogo.svg"
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className='signin-container'>
      <div className="vertical-logo-bar">
        <img src={mowLogo} alt="" className="signin-logo" />
      </div>
      <div className="signin-box-container">
        <div className="signin-box">
          <div className="heading-primary">Sign In</div>
          <div className="subheading-primary">Log back in to open your account.</div>
          <br />
          <div className="subheading-secondary username">Username</div>
          <input className='login-field' type="text" />
          <div className="subheading-secondary password">Password</div>
          <input className='login-field' type="text" />
          <div className='login-extras'>
            <div className='remember-me'>
              <input className='login-checkbox' type="checkbox" />
              <label htmlFor="">Remember me for 30 days?</label>
            </div>
            <div className='forgot-password-box'>
              <a className='forgot-password' href="/forgot-password">Forgot password?</a>
            </div>
          </div>
          <div>
              <button className='signin-button' onClick={()=>navigate("/dashboard")}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn