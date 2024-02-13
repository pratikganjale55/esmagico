import React from "react";
import "./subNav.css";
const SubNavbar = () => {
  return (
    <>
      <div className="subnavbar">
        <div className="flex-menu">
          <ul className="submenu">
            <li>Offers</li>
            <li>Stories</li>
            <li>Tata Pay</li>
            <li>NeuPass</li>
          </ul>
          <div className="sub-icons">
            <div className="flex-icon-display">
              <div>
                122018<i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <i className="bi bi-person"></i>
              </div>
              <div>
                <i className="bi bi-cart-check"></i>
              </div>
              <div>
                <i className="bi bi-bell"></i>
              </div>
              <div>
                <i className="bi bi-person"></i>
              </div>
            </div>
            <div className="subsearch">
              <input type="text" placeholder="Search Tata Neu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
