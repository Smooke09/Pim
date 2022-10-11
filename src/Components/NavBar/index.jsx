import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

{
  /*Inserção dos estilo da página*/
}

const NavBar = () => {

  const goPlan = () =>{
    window.scrollTo({
      top: 500, 
      behavior: 'smooth'
    });
  };

  const goContats = () =>{
    window.scrollTo({
      top: 2000, 
      behavior: 'smooth'
    });
  };

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
                {/*
                <li>
                  <Link to="#">Produtos</Link>
                </li>
                */}
                <li>
                  <button className="button" onClick={goPlan}>Planos</button>
                </li>
                <li>
                  <button className="button" onClick={goContats}>Suporte</button>
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
