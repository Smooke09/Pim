import React  from "react";
import "./styles.scss";

const simulation = () => {
  return (
    <div className="container-simulation-page">
      <div className="div-button-goBack"></div>
      <button>
        <a href="/Home">VOLTAR</a>
      </button>
      <div className="simulation-content">
        <form className="form-simulation">
          <div className="simulation-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="imputs-div">
              <div className="div-imput">
                <p>Nome:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Email:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Telefone:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />              
                <p>Trabalho:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                /><p>Nome:</p>  <input
                onChange={(e) => setEmail(e.target.value)}
                />
                <p>Email:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Telefone:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />              
                <p>Trabalho:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>  
              <div className="div-imput">       
                <p>Atividades no trabalho:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                /><p>Atividades no trabalho:</p>  <input
                onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="div-imput">       
                <p>Atividades no trabalho:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                /><p>Atividades no trabalho:</p>  <input
                onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="div-imput">       
                <p>Atividades no trabalho:</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                /><p>Atividades no trabalho:</p>  <input
                onChange={(e) => setEmail(e.target.value)}
                />
                <p>Faixa salarial:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Mora sozinho?</p>  <input
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Idade:</p>  <input
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="button-simulation">
              <button>simulation</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default simulation;
