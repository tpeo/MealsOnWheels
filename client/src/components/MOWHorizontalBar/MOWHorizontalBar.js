import React from 'react'
import './MOWHorizontalBar.css'
import logo from '../../files/MoWLogo.svg'
import { useNavigate } from 'react-router-dom'

const MOWHorizontalBar = () => {
  const navigate = useNavigate()

  return (
    <div className="splash-bar">
        <img onClick={()=>navigate("/")} className="mow-logo" src={logo} alt="Meals On Wheels Logo"></img>
    </div>
  )
}

export default MOWHorizontalBar