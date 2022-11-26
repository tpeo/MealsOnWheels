import React from 'react'
import './MOWHorizontalBar.css'
import logo from '../../files/MoWLogo.svg'
const MOWHorizontalBar = () => {
  return (
    <div className="splash-bar">
        <img className="mow-logo" src={logo} alt="Meals On Wheels Logo"></img>
    </div>
  )
}

export default MOWHorizontalBar