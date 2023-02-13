import "./SeniorSignUp.css"
import React, { useState, useEffect, useContext } from 'react'
import MOWHorizontalBar from "../../components/MOWHorizontalBar/MOWHorizontalBar"

const SeniorSignUp = () => {
  const [toggleState, setToggleState] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <MOWHorizontalBar />
      <div className="container">
        <div className="heading-primary">
          Senior Application Form
        </div>
        
        <div className="tabs-container">
          <div className="tab-heading-primary">
            <button onClick={setToggleState(1)}>Demographics</button>
          </div>
          <div className="tab-heading-sub">
            <button onClick={setToggleState(1)}>General Information</button>
          </div>
          <div className="tab-heading-sub">
            <button onClick={setToggleState(2)}>Veteran Status</button>
          </div>
          <div className="tab-heading-primary">
            <button onClick={setToggleState(3)}>Financials</button>
          </div>
          <div className="tab-heading-primary">
            <button onClick={setToggleState(4)}>Diet</button>
          </div>
          <div className="tab-heading-primary">
            <button onClick={setToggleState(6)}>Agreements</button>
          </div>
          <div className="tab-heading-primary">
            <button onClick={setToggleState(8)}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeniorSignUp