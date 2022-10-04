import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

{
  /*Inserção dos estilo da página*/
}

const NavBar = () => {
  return (
    <header>
      <div className="container-navbar">
        <div className="container-fixed-navbar">
          <nav className="content-navbar">
            <div className="content-img">
              <img src="./img/logo1.png" alt="logo" /> {/*Inserção da logo*/}
            </div>
            <div className="content-menu">
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="#">Produtos</Link>
                </li>
                <li>
                  <Link to="#">Planos</Link>
                </li>
                <li>
                  <Link to="#">Suporte</Link>
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
