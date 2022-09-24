import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss"; {/*Inserção dos estilo da página*/}

const Footer = () => {
  return (
    <div>
        <div className="container-footer">
            <div className="div-logo">
                <img className="logo-footer" src="./img/logo2.png" alt="logo" /> {/*Inserção da logo*/}
            </div>
            <div className="div-ul">
                <ul className="ul">
                    <li>
                    <Link to="#">Home</Link>    {/*Inserção das opções para redirecionamento*/}
                    </li>
                    <li>
                    <Link to="#">Products</Link>    {/*Inserção das opções para redirecionamento*/}
                    </li>
                    <li>
                    <Link to="#">Services</Link>    {/*Inserção das opções para redirecionamento*/}
                    </li>
                    <li>
                    <Link to="#">Services</Link>    {/*Inserção das opções para redirecionamento*/}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Footer;
