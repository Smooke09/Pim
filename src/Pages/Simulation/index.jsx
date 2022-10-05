import React from "react";
import "./styles.scss";

const Simulation = () => {
  return (
    <div className="content-Simulation-homePage">
      <div className="content-Simulation-text slide-in-left">
        <h2>Vamos Começar?</h2>
        <p>Escolha o seguro que se encaixe melhor com suas necessidades</p>
      </div>
      <div className="content-itens-Simulation-homePage">
        <div className="item-Simulation-homePage">
          <button>
            <a href="/Home">VOLTAR</a>
          </button>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src="icon/iconDoenca.svg" alt="img" />
              </div>
              <h3>Doencas Graves</h3>
              <p>
                Se você vier a faltar por causa de um acidente ou doença, a
                pessoa que você escolheu como beneficiário receberá o valor
                contratado.
              </p>
              <div className="card-item-button">
                <button>
                  <a href="#">Fazer Simulação</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;