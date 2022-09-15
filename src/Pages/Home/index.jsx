import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import "./styles.scss";

const Home = () => {
  return (
    <div className="homePage">
      <NavBar />
      <div className="banner-homePage">
        <div className="content-homePage">
          <div className="content-itens-homePage">
            <h2>
              Assistencia para sua vida e <br />a sua familia de qualquer <br />
              lugar e qualquer hora
            </h2>
            <button>
              <a href="/login">Fazer login</a>
            </button>
          </div>
        </div>
      </div>

      <div className="content-features-homePage">
        <div className="content-features-text slide-in-left">
          <h2>Vamos Começar?</h2>
          <p>Escolha o seguro que se encaixe melhor com suas necessidades</p>
        </div>
        <div className="content-itens-features-homePage">
          <div className="item-features-homePage">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
