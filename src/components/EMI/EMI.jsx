import React from "react";
import "./emi.css";
const EMI = () => {
  return (
    <>
      <div className="emi-container">
        <h2>EMI Calculator</h2>
        <div className="emi-left-right-div">
          <div className="emileftDiv">
            <div className="emi-input-div">
              <div className="inputWrapper">
                <label>Loan Amount</label>
                <div className="inputWithSymbol">
                  <span>₹</span>
                  <input type="text" id="loanAmount" placeholder="300000" />
                </div>
              </div>
              <div className="inputWrapper">
                <label>Interest Rate (%)</label>
                <div className="inputWithSymbol">
                  <span>% </span>
                  <input type="text" id="loanAmount" placeholder="300000" />
                </div>
              </div>
              <div className="inputWrapper">
                <label>Principal Amount </label>
                <div className="inputWithSymbol">
                  <span>Months</span>
                  <input type="text" id="loanAmount" placeholder="300000" />
                </div>
              </div>
            </div>
          </div>
          <div className="emirightDiv">
            <div className="right-emi-circle">
              <div className="left-emi-circle">
                <div className="donut-circle"></div>
                <div className="status">
                  <div className="bar-info">
                    <div className="dot"></div>
                    <div className="nameofbar">Principal Amount </div>
                    <div className="rsdot">₹3,00,000</div>
                  </div>
                  <div className="bar-info">
                    <div className="dot"></div>
                    <div className="nameofbar">Principal Amount </div>
                    <div className="rsdot">₹3,00,000</div>
                  </div>
                  <div className="bar-info">
                    <div className="dot"></div>
                    <div className="nameofbar">Principal Amount </div>
                    <div className="rsdot">₹3,00,000</div>
                  </div>
                </div>
              </div>
              <div className="right-emi-circle">
                <div className="status-right-info">
                  <h2>Equated Monthly Instalments (EMI)</h2>
                  <p>₹14,977</p>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMI;
