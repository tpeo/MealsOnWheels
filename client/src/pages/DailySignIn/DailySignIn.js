import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./DailySignIn.css"
import MOWHorizontalBar from '../../components/MOWHorizontalBar/MOWHorizontalBar'
const DailySignIn = () => {
  const [formValues, setFormValues] = useState({username: '', password: '', confirmPassword: ''});
  const handleInputChange = (e) => {
    if (e.target.name === "username") {
        setFormValues({ ...formValues, username: e.target.value })
      } else if (e.target.name === "password") {
        setFormValues({ ...formValues, password: e.target.value })
      } else if (e.target.name === "confirmPassword") {
        setFormValues({ ...formValues, confirmPassword: e.target.value })
      }
      checkInput(e);

  }
  const handleFormSubmit = (e) => {
    //logic to backend
  }
  const navigate = useNavigate();
  return (
    <>
        <MOWHorizontalBar />
        <div className="daily-sign-in-container">
            <div className="daily-sign-in-box-container">
                <div className="daily-sign-in-box">
                    <div className="heading-primary">Daily Sign-In</div>
                    <br />
                    <div className="subheading-primary">Please enter the needed credentials.</div>
                    <br />
                    <div className="input-fields">
                        <div className="last-name-input">
                            <input className="login-field-whole" type="text" placeholder="Last Name" onChange={handleInputChange}></input>
                        </div>
                        <div className="id-input">
                            <input className="login-field-half" type="text" placeholder="ID" onChange={handleInputChange} />
                            <select className="select-field-half" placeholder="Select Branch">
                                <option value="centralTexas">Central Texas</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="button-container">
                        <button className='daily-checkin-button' onClick={()=>navigate("/checkin")}>Sign In</button>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default DailySignIn