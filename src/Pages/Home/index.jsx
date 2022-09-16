import React, { useState } from "react";
import "./styles.scss";
import NavBar from "../../Components/NavBar";
import Features from "../Features";
import About from "../About";
import Contact from "../Contact";

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
      <Features />
      <About />
      <Contact />
      <h1>footer</h1>
    </div>
  );
};

export default Home;
