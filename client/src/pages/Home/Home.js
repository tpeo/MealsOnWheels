import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"
import MOWHorizontalBar from "../../components/MOWHorizontalBar/MOWHorizontalBar"

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
        <MOWHorizontalBar />
        <div className="home-container">
            <div className="home-box-container" >
                <div className="home-box home-box-left home-box-prompt">
                    <div classNam8e='home-box-prompt-text'>Welcome</div>
                    <div className='home-box-prompt-sub-text'>Complete your Daily Sign In for meal pickup, or Register today to explore the benefits of Meals on Wheels! The application confirms your eligibility for our free service in Travis county.</div>
                    <div className='button-container'>
                        <button className='home-box-register-button' onClick={()=>navigate("/checkin")}>Sign In</button>
                        <button className='home-box-hollow-button' onClick={()=>navigate("/register")}>Register</button>
                    </div>
                </div>                
            </div>
            <div className="home-officer-sign-in">
                <button className='officer-button' onClick={()=>navigate("/signin")}><span className='officer-button-text'>Open the Officer Dashboard →</span></button>
            </div>
            
        </div>
    </>
  )
}

export default Home;