import React,{useState} from "react";
import { motion } from "framer-motion";

import "./styles.scss";

const About = () => {
  const cardVariants = {};

  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => console.log("enter")}
        viewport={{
          once: true,
        }}
      >
        <motion.div className="about">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            molestias, quibusdam, voluptate, quia consequuntur voluptates
            voluptatem voluptas quae eaque ipsa quisquam. Molestiae, quae
            voluptates? Quae voluptas eum quidem. Quisquam, quae.
          </p>
        </motion.div>
      </motion.div>
    </>
  );

  /*   return (
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
  ); */
};

export default About;
