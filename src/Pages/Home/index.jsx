import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="banner-homePage">
        <div className="content-homePage">
          <div className="content-itens-homePage">
            <h2>
              Assistencia para sua vida e <br />
              familia de qualquer lugar
            </h2>
            <button>
              <a href="/login">Fazer login</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
