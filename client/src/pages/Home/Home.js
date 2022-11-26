import React, { useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom"
import UserContext from '../../context/UserContext'
import "./Home.css"
import MOWHorizontalBar from "../../components/MOWHorizontalBar/MOWHorizontalBar"
import Axios from 'axios'

const Home = () => {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");
    
          if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
          }
    
          const tokenRes = await Axios.post(
            "/users/isTokenValid",
            null,
            { headers: { "x-auth-token": token } }
          );
    
          if (tokenRes.data) {
            const userRes = await Axios.get("/users/", {
              headers: { "x-auth-token": token },
            });
    
            setUserData({
              token: token,
              user: userRes.data,
            });
            navigate("/dashboard")
          }
        };
    
        checkLoggedIn();
    }, []);

    return (
    <>
        <MOWHorizontalBar />
        <div className="home-container">
            <div className="home-box-container" >
                <div className="home-box home-box-left home-box-prompt">
                    <div className='home-box-prompt-text'>New?</div>
                    <div>
                        <button className='home-box-register-button' onClick={()=>navigate("/signup")}>Register</button>
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
                        <button className='home-box-register-button' onClick={()=>navigate("/signin")}>Sign-In</button>
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