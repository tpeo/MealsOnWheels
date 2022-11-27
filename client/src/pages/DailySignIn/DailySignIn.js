import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./DailySignIn.css"
import MOWHorizontalBar from '../../components/MOWHorizontalBar/MOWHorizontalBar'
const DailySignIn = () => {
  const [formValues, setFormValues] = useState({lastName: '', id: '', branch: ''});
  const handleInputChange = (e) => {
    if (e.target.name === "lastName") {
        setFormValues({ ...formValues, lastName: e.target.value })
      } else if (e.target.name === "id") {
        setFormValues({ ...formValues, id: e.target.value })
      } else if (e.target.name === "branch") {
        setFormValues({ ...formValues, branch: e.target.value })
      }
      // checkInput(e);
      console.log(formValues);

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
                            <input className="login-field-whole" type="text" placeholder="Last Name" onChange={handleInputChange} name="lastName"/>
                        </div>
                        <div className="id-input">
                            <input className="login-field-half" type="text" placeholder="ID" onChange={handleInputChange} name="id"/>
                            <select className="select-field-half" value={formValues.branch} onChange={handleInputChange} name="branch">
                                <option disabled={true} value="">
                                  Select Branch
                                </option>
                                <option value="williamson">Williamson County</option>
                                <option value="travis">Travis County</option>
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