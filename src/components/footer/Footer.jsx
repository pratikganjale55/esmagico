import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="left-icons">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-linkedin"></i>
        </div>
        <div className="right-info">
          <div className="info-column">
            <h3>Help & Support</h3>
            <ul>
              <li>Terms & Service</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="info-column">
            <h3>Contact</h3>
            <p>Customer Care</p>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p>987654321</p>
            <p>Tataneu Email ID</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
