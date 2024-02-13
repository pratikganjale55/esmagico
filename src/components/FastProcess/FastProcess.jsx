import React from "react";
import "./FastProcess.css";
import mobile from "../../assets/mobile.png";
import { motion } from "framer-motion";

const FastProcess = () => {
  return (
    <>
      <div className="process-container">
        <div className="process-left-div">
          <div className="blur process-hero_blur"></div>
          <img src={mobile} alt="mobile" />

          <div className="task task-top-left">
            <i class="bi bi-heart-pulse"></i>
            Medical
          </div>

          <div className="task task-bottom-left">
            <i class="bi bi-bag-check-fill"></i>
            Shopping
          </div>
          <div className="task task-middle">
            <i class="bi bi-bag-check-fill"></i>
            Renovations
          </div>
          <div className="task task-top-right">
            <i class="bi bi-heart-pulse"></i>
            School loans
          </div>
          <div className="task task-bottom-right">
            <i class="bi bi-duffle-fill"></i>
            Travel
          </div>
          {/* // mobile inside image  */}
          <div className="task div-inside-mobile">
            <i class="bi bi-file-earmark-person"></i>
            <p>Personal Loan</p>
            <p>Upto Rs 10 lack</p>
          </div>
        </div>
        <div className="process-right-div">
          <h2>Lightning Fast Process</h2>
          <div className="step-bar">
            <div className="step active"></div>
            <div className="step-middle active"></div>
            <div className="step"></div>
            <div className="step-middle"></div>
            <div className="step"></div>
            <div className="step-middle"></div>
            <div className="step"></div>
          </div>
          <p>Customer share basic details</p>

          <div className="apply-btn-process">
            <div className="process-btn">APPLY NOW</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastProcess;
