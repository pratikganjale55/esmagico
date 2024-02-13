import React, { useState } from "react";
import "./Navbar.css";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <div className="logo">Logo</div>
          <ul className="menu">
            <li>Offers</li>
            <li>Stories</li>
            <li>Tata Pay</li>
            <li>NeuPass</li>
          </ul>
        </div>
        <div className={"right-side"}>
          <div className="search">
            <div className="search-icon">
              <i className="bi bi-search"></i>
            </div>
            <input type="text" placeholder="Search Tata Neu" />
          </div>
          <div className="icons">
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
        </div>
        <div className="ham-burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {mobile && showMenu && <SubNavbar />}
    </>
  );
};

export default Navbar;
