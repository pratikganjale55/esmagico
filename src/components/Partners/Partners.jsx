import React from "react";
import "./Partners.css";
import hdfc from "../../assets/hdfc.png";
import icici from "../../assets/icic.png";
import bob from "../../assets/bob.png";
import { motion } from "framer-motion";
const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="partners-heading">Our Partners</div>
        {/* <motion.div
          className="partner-list"
          initial={{opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: -100 }}
          transition={{ duration: 2, typr: "spring", duration: 3}}
        > */}
          <div className="partner-list">
            <div>
              <img src={hdfc} alt="HDFC Bank Logo" />
              <p> HDFC Bank</p>
            </div>
            <div>
              <img src={icici} alt="HDFC Bank Logo" />
              <p>ICICI Bank</p>
            </div>
            <div>
              <img src={icici} alt="HDFC Bank Logo" />
              <p>ICICI Bank</p>
            </div>
            <div>
              <img src={bob} alt="HDFC Bank Logo" />
              <p>Bank of Baroda</p>
            </div>
          </div>
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default Partners;
