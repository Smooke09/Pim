import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavBar = () => {
  return (
    <header>
      <div className="container-navbar">
        <div className="container-fixed-navbar">
          <nav className="content-navbar">
            <div className="content-img">
              <img src="./img/logo.jpg" alt="logo" />
            </div>
            <div className="content-menu">
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Products</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
