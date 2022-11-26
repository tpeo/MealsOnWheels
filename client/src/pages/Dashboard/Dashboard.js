import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

const Dashboard = () => {
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
      } else {
        navigate("/signin");
      }
    };

    checkLoggedIn();
  }, []);
  
  // Temporary logout option
  const LogoutUser = () => {      
      console.log("Logout button pressed")  
      setUserData({
          token: undefined,
          user: undefined
      });
      localStorage.setItem("auth-token", "");
      navigate("/signin")
  };

  return (
    <div>
      <h1>
        Dashboard 
        <button className='' onClick={LogoutUser}>Logout</button>
      </h1>
    </div>
  )
}

export default Dashboard