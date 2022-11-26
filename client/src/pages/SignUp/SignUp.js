import React, { useState, useEffect, useContext } from 'react'
import mowLogo from "../../files/MoWLogo.svg"
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"
import ErrorNotice from "../../components/misc/ErrorNotice"
import UserContext from "../../context/UserContext"
import Axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
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

  const registerUser = async (e) => {
    e.preventDefault()

    try {
      const newUser = {
        email,
        password,
        password2,
      }

      await Axios.post("/users/register", newUser)

      const loginRes = await Axios.post("/users/login", {
        email,
        password
      })

      console.log(loginRes)

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user.id,
      })

      localStorage.setItem("auth-token", loginRes.data.token)

      navigate("/dashboard")
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }

  return (
    <div className='signup-container'>
      <div className="vertical-logo-bar">
        <img onClick={()=>navigate("/")} src={mowLogo} alt="" className="signup-logo" />
      </div>
      <div className="signup-box-container">
        <div className="signup-box">
          <div className="heading-primary">Create Account</div>
          <div className="subheading-primary"> Enter the credentials below</div>
          <br />
          {error && <ErrorNotice message={error} />}
          <br />
          <div className="subheading-secondary email">Email</div>
          <input className='login-field' name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
          <div className="subheading-secondary password">Password</div>
          <input className='login-field' name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <div className="subheading-secondary password">Confirm Password</div>
          <input className='login-field' name="confirmPassword" type="password" onChange={(e) => setPassword2(e.target.value)} />
          <div>
            <button className='signup-button' onClick={registerUser}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp