import React from 'react'
import "./header.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import logo from "../../images/logo.png"


const Navbar = () => {
  return (
    <div className="header">
      <div className="header__main">
        <div className="brand">
          <div className="brand__logo">
            <a href="/Home">
              <img src={logo} alt="logo" />
            </a>
            {/* <div className="logoM">
              Converter<span>Area</span>
            </div> */}
          </div>
        </div>

        <div className="header__nav">
          <div className="main__menu" id="menuBig">
            <ul className="nav">
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/tool_page">Tools</a>
              </li>
              <li>
                <a href="/merge/pdf">About Us</a>
              </li>
              <li>
                <a href="/merge/pdf">
                  Services
                  {/* <i class="fa-sharp fa-solid fa-caret-down"></i> */}
                </a>
              </li>
              <li>
                <a href="/ContactUs">
                  Contact Us
                  {/* <i class="fa-sharp fa-solid fa-caret-down"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="top-menu">
          <ul className="nav"></ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar