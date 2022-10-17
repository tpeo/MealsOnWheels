import React from 'react'
import { useHistory } from "react-router-dom";
import "./Home.css"
import MOWHorizontalBar from "../../components/MOWHorizontalBar/MOWHorizontalBar"

const Home = () => {
  return (
    <>
        <MOWHorizontalBar />
        <div className="home-container">
            <div className="home-box-container" >
                <div className="home-box home-box-left home-box-prompt">
                    <div className='home-box-prompt-text'>New?</div>
                    <div>
                        <button className='home-box-register-button'>Register</button>
                    </div>
                </div>
                <div className=" home-box home-box-right home-box-text-container">
                    <div className="home-box-text">
                        Begin your application to experience the benefits of Meals on Wheels.
                    </div>
                </div>
                
            </div>
            <div className="home-box-container" >
                <div className="home-box home-box-left home-box-prompt">
                    <div className='home-box-prompt-text'>Returning?</div>
                    <div>
                        <button className='home-box-register-button'>Sign-In</button>
                    </div>
                </div>
                <div className=" home-box home-box-right home-box-text-container">
                    <div className="home-box-text">
                        Log in to your account and enter the Officer Dashboard.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;