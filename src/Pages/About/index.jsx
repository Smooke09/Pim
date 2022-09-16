import React from "react";
import "./styles.scss";

const About = () => {
  return (
    <div className="aboutPage">
      <img src="./img/wave.svg" />
      <div className="banner-aboutPage">
        <div className="content-text fadeInLeftBig ">
          <h2>Quem somos? </h2>
          <p>
            O Digital Safety Life é uma plataforma para suprir suas necessidades
            com seu seguro, foi criado com o intuito de auxiliar nos serviços
            que a Top Seguros Brasil requisitava em melhorar, trazendo uma
            assistência e preços diretamente da empresa.
          </p>
        </div>
        <div className="content-img fadeInRightBig ">
          <img src="./img/quem-somos.png" alt="Imagens pc" />
        </div>
      </div>
    </div>
  );
};

export default About;
