import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./styles.scss";

const About = () => {
  const [isEfect, setIsEfect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 900;

      if (show) {
        setIsEfect(true);
      } else {
        setIsEfect(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="aboutPage">
        <img src="./img/wave.svg" />
        <div className="banner-aboutPage">
          <div className="content-aboutPage">
            <div
              className={
                isEfect ? "content-text fadeInLeftBig" : "content-text"
              }
            >
              <h2>Quem somos? </h2>
              <p>
                O Digital Safety Life é uma plataforma para suprir suas
                necessidades com seu seguro, foi criado com o intuito de
                auxiliar nos serviços que a Top Seguros Brasil requisitava em
                melhorar, trazendo uma assistência e preços diretamente da
                empresa.
              </p>
            </div>
            <div
              className={isEfect ? "content-img fadeInRightBig" : "content-img"}
            >
              <img src="./img/quem-somos.png" alt="Imagens pc" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
