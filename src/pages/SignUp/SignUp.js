import React, {useState} from 'react'
import mowLogo from "../../files/MoWLogo.svg"
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"
const SignUp = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({username: '', password: '', 
                                                confirmPassword: ''});
  const [error, setErrors] = useState({username: '', password: '', 
                                       confirmPassword: ''})


  const handleInputChange = e => {
    if(e.target.name === "username") {
      setFormValues({...formValues, username: e.target.value})
    } else if(e.target.name === "password") {
      setFormValues({...formValues, password: e.target.value})
    } else if(e.target.name === "confirmPassword") {
      setFormValues({...formValues, confirmPassword: e.target.value})
    }
    checkInput(e);
    console.log(error);
  }

  const checkInput = e => {
    if(e.target.name === "username") {
      if(!e.target.value) {
        setErrors({...error, username: 'Please Enter Username'});
      } else {
        setErrors({...error, username: ''});
      }
    } else if(e.target.name === "password") {
      if(!e.target.value) {
        setErrors({...error, password: 'Please Enter Password'});
      } else if(e.target.value.length < 8) {
        setErrors({...error, password: 'Password Must Be 8 Characters In Length'});
      } else {
        setErrors({...error, password: ''});
      }
    } else if(e.target.name === "confirmPassword") {
       if(e.target.value !== formValues.password) {
        setErrors({...error, confirmPassword: 'Passwords Do Not Match'});
       } else {
        setErrors({...error, confirmPassword: ''});
       }
    }

  }

  const onSubmitHandler = e => {
    let invalid = error.username || error.password || error.confirmPassword
    if(!invalid) {
      navigate('/dashboard')
    }

  }

  return (
    <div className='signup-container'>
      <div className="vertical-logo-bar">
        <img src={mowLogo} alt="" className="signup-logo" />
      </div>
      <div className="signup-box-container">
        <div className="signup-box">
          <div className="heading-primary">Create Account</div>
          <div className="subheading-primary"> Enter the credentials below</div>
          <br />
          <div className="subheading-secondary username">Username {error.username && <span className='error'><br /> {error.username}</span>}</div>
          <input className='login-field' name="username" type="text" onChange={handleInputChange} />
          <div className="subheading-secondary password">Password {error.password && <span className='error'><br /> {error.password}</span>}</div>
          <input className='login-field' name="password" type="password" onChange={handleInputChange} />
          <div className="subheading-secondary password">Confirm Password {error.confirmPassword && <span className='error'><br /> {error.confirmPassword}</span>}</div>
          <input className='login-field' name="confirmPassword" type="password" onChange={handleInputChange} />
          <div>
              <button className='signup-button' onClick={onSubmitHandler}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp