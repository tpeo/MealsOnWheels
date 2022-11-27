import logo from './logo.svg';
import './App.css';
import './styles.css'
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import UserContext from "./context/UserContext";
import Axios from 'axios';
import Home from "./pages/Home/Home"
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard';
import DailySignIn from './pages/DailySignIn/DailySignIn';
import Application from './pages/Application/Application';

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkin" element= {<DailySignIn />} />
            <Route path="/application" element= {<Application />} />

          </Routes>
        </div>
      </UserContext.Provider>
  );
}

export default App;
