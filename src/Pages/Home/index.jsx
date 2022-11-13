import React, { useState } from "react";
import "./styles.scss";
import NavBar from "../../Components/NavBar";
import Features from "../Features";
import { Link } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="homePage">
      <NavBar />
      <div className="banner-homePage">
        <div className="content-homePage">
          <div className="content-itens-homePage">
            <h2>
              Assistência para sua vida e <br />a sua familia de qualquer <br />
              lugar a toda hora
            </h2>
            <button>
              <Link to="/login">Fazer login</Link>
            </button>
          </div>
        </div>
      </div>
      <Features />
      <About />
      <Contact />
      <Footer />
      <button className="to-top" onClick={goTop}>
        Voltar ao topo
      </button>
    </div>
  );
};

export default Home;
