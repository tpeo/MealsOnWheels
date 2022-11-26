import logo from './logo.svg';
import './App.css';
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import DailySignIn from './pages/DailySignIn/DailySignIn';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkin" element= {<DailySignIn />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
