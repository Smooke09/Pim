import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss"; {/*Inserção dos estilo da página*/}

const Footer = () => {

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
    <div className="div-master">
        <div className="container-footer">
            <div className="div-logo">
                <img className="logo-footer" src="./img/logo2.png" alt="logo" /> {/*Inserção da logo*/}
            </div>
            <div className="div-email">
                <img className="topSeguro-" src="./img/logo-top-brasil-seguros.png" alt="topSeguro" />
                <a href="mailto: safetylife.rh@gmail.com" className="email">safetylife.rh@gmail.com</a>
            </div>
            <div className="div-ul">
                <ul className="ul">
                    <ol>
                        <Link to="/login">Login</Link>    {/*Inserção das opções para redirecionamento*/}
                    </ol>
                    <ol>
                        <button className="button" onClick={goPlan}>Planos</button>    {/*Inserção das opções para redirecionamento*/}
                    </ol>
                    <ol>
                        <button className="button" onClick={goContats}>Suporte</button>    {/*Inserção das opções para redirecionamento*/}
                    </ol>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Footer;
