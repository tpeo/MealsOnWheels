import React, { useEffect, useState, useContext } from 'react'
import mowLogo from "../../files/MoWLogo.svg"
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"
import ErrorNotice from "../../components/misc/ErrorNotice"
import UserContext from "../../context/UserContext"
import Axios from 'axios'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const { setUserData } = useContext(UserContext)

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

  const LogInUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Login button ")
      const loginRes = await Axios.post("/users/login", {
        email,
        password
      });
      console.log("after request")
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);

      navigate("/dashboard");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className='signin-container'>
      <div className="vertical-logo-bar">
        <img onClick={()=>navigate("/")} src={mowLogo} alt="" className="signup-logo" />
      </div>
      <div className="signin-box-container">
        <div className="signin-box">
          <div className="heading-primary">Sign In</div>
          <div className="subheading-primary">Log back in to open your account.</div>
          <br />
          {error && <ErrorNotice message={error} />}
          <div className="subheading-secondary username">Email</div>
          <input className='login-field' type="text" onChange={(e) => setEmail(e.target.value)} />
          <div className="subheading-secondary password">Password</div>
          <input className='login-field' type="password" onChange={(e) => setPassword(e.target.value)}/>
          <div className='login-extras'>
            <div className='remember-me'>
              <input className='login-checkbox' type="checkbox" />
              <label htmlFor="">Remember me for 30 days?</label>
            </div>
            <div className='forgot-password-box'>
              &nbsp;&nbsp;<a className='forgot-password' href="/forgot-password">Forgot password?</a>
            </div>
          </div>
          <div>
            <button className='signin-button' onClick={LogInUser}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn