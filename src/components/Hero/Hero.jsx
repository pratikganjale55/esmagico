import React from "react";
import "./Hero.css";
import familyImg from "../../assets/family.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left-div">
          <div className="top-view">
            <div>
              <p className="hero-text1">Turn Dreams into Reality</p>
            </div>
            <div className="hero-text2">
              <span>with </span>
              <span className="person-span">Personal Loans</span>
            </div>
          </div>

          <div className="hero-flex-top">
            <div className="content-div">
              <div className="top-left">
                <i class="bi bi-substack"></i>
              </div>
              <div className="top-right">
                <span>Avail Zero</span>
                <div>Processing fee</div>
              </div>
            </div>
            <div className="content-div">
              <div className="top-left">
                <i className="bi bi-substack"></i>
              </div>
              <div className="top-right">
                <span>Avail Zero</span>
                <div>Processing fee</div>
              </div>
            </div>
          </div>
          <div className="hero-flex-bottom">
            <div className="content-div">
              <div className="top-left">
                <i class="bi bi-substack"></i>
              </div>
              <div className="top-right">
                <span>Avail Zero</span>
                <div>Processing fee</div>
              </div>
            </div>
            <div className="content-div">
              <div className="top-left">
                <i className="bi bi-substack"></i>
              </div>
              <div className="top-right">
                <span>Avail Zero</span>
                <div>Processing fee</div>
              </div>
            </div>
          </div>

          <div className="apply-btn">APPLY NOW</div>
        </div>
        <motion.div
          className="hero-right-div"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: -40 }}
          transition={{ duration: 2, typr: "spring", duration: 3 }}
        >
          <div className="hero-right-div">
            <div className="blur hero_blur"></div>
            <img src={familyImg} className="family-Img" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
