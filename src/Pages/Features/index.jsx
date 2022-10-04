import React from "react";
import "./styles.scss";

const Features = () => {
  return (
    <div className="content-features-homePage">
      <div className="content-features-text slide-in-left">
        <h2>Vamos Começar?</h2>
        <p>Escolha o seguro que se encaixe melhor com suas necessidades</p>
      </div>
      <div className="content-itens-features-homePage">
        <div className="item-features-homePage">
          <div className="card one">
            <div className="card-content">
              <div className="card-image">
                <img src="icon/iconMorte.svg" alt="img" />
              </div>
              <h3>Morte</h3>
              <p>
                Se você vier a falecer por causa de um acidente ou doença, a
                pessoa que você escolheu como beneficiário receberá o valor
                contratado.
              </p>
              <div className="card-item-button">
                <button>
                  <a href="/Simulation">Fazer Simulação</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src="icon/iconInvalidez.svg" alt="img" />
              </div>
              <h3>Invalidez</h3>
              <p>
                Para um acidente ou doença que causam perda permanente ou total
                dos movimentos de membros e funcionamento de órgãos.
              </p>
              <div className="card-item-button">
                <button>
                  <a href="#">Fazer Simulação</a>
                </button>
              </div>
            </div>
          </div>
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

export default Features;
