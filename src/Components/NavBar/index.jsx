import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <nav className="content-navbar">
        <div className="content-img">
          <img src="./vite.svg" alt="logo" />
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
  );
};

export default NavBar;
