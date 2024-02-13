import React from "react";
import "./Loan.css";
import man from "../../assets/man.png";
const Loan = () => {
  return (
    <>
      <div className="loan-top-text">
        <i class="bi bi-brightness-high"></i>
        <p>Personal Loan Highlights</p>
      </div>
      <div className="loan-container">
        <div className="loan-left-div">
          <img src={man} alt="man" />
          
        </div>
        <div className="loan-right-div">
          <div className="info-inside-div">
            <div className="info-section">
              <i className="bi bi-cash"></i>
              <div className="info-text">
                <h4>Interest Rate</h4>
                <p>
                  Usually <span>10.49% p.a.</span> onwards: some PSUs may offer
                  lower rates
                </p>
              </div>
            </div>
            <div class="info-section">
              <i class="bi bi-currency-dollar"></i>
              <div class="info-text">
                <h4>Loan Amount</h4>
                <p>
                  Can go up to <span>RS 40 lakh:</span> some lenders may offer
                  higher loan amount
                </p>
              </div>
            </div>

            <div class="info-section">
              <i class="bi bi-cash-stack"></i>
              <div class="info-text">
                <h4>Processing Fees</h4>
                <p>
                  <span>0.5% to 4% </span>of loan amount (may vary across
                  lenders)
                </p>
              </div>
            </div>

            <div class="info-section">
              <i class="bi bi-clock"></i>
              <div class="info-text">
                <h4>Tenure</h4>
                <p>
                  Up to <span>5 years</span> (some lenders offer repayment
                  period till 8 years)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
