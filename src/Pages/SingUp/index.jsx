import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SingUp = () => {
  const [client, setClient] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("teste");
  };

  return (
    <div className="container-singUp-page">
      <div className="singUp-content">
        <form className="form-singUp" onSubmit={handleSubmit}>
          <div className="singUp-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="input-content-singUp">
              <div className="input-left-singUp">
                <div className="div-input">
                  <span>Digite Seu nome:</span>
                  <input type="text" placeholder="Digite seu nome" />
                </div>
                <div className="div-input">
                  <span>Digite seu RG:</span>
                  <input type="number" placeholder="000000000" />
                </div>
                <div className="div-input">
                  <span>Digite seu CPF: </span>
                  <input type="number" placeholder="123456789" />
                </div>
              </div>
              <div className="input-right-singUp">
                <div className="div-input">
                  <span>Gênero</span>
                  <input type="text" placeholder="Digite seu email" />
                </div>
                <div className="div-input">
                  <span>Telefone para contato:</span>
                  <input type="text" placeholder="13981706262" />
                </div>
                <div className="div-input">
                  <span>Estado civil:</span>
                  <input type="text" placeholder="Estado Civil" />
                </div>
              </div>
            </div>
            <div className="button-singUp">
              <button type="submit">Avançar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
