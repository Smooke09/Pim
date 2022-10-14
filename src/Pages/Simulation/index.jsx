import React  from "react";
import "./styles.scss";

const simulation = () => {
  return (
    <div className="container-simulation-page">
        <button className="button-goback">
          <a href="/Home">VOLTAR</a>
        </button>
      <div className="simulation-content">
        <form className="form-simulation">
          <div className="simulation-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="imputs-div">
              <div className="div-imput">
                <p>Nome:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>RG:</p>  <input  className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>CPF:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Genero:</p>  <input className="input-checkbox" type = "checkbox"
                  /> <label>Masculino</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Feminino</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Outro</label>
                </div>
                <p>Numero de contato:</p>  <input className="input-normal"
                onChange={(e) => setEmail(e.target.value)}
                />
                <p>Estado civil:</p>  <input className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Nacionalidade:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />     
                <div className="div-checkbox">         
                  <p>Reside no Brasil?:</p>  <input className="input-checkbox" type = "checkbox"
                      /> <label>Sim</label>
                      <input className="input-checkbox" type = "checkbox"
                      /> <label>Não</label>
                </div>
              </div>  
              <div className="div-imput">
                <p>Data de nascimento:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Hobbies:</p>  <input className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Fuma?:</p>  <input className="input-checkbox" type = "checkbox"
                  /> <label>Sim</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Não</label>
                </div>
                <p>Registro de condução:</p>  <input className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Faixa de renda mensal:</p>  <input className="input-normal"
                onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Politicamente exposto?:</p>  <input className="input-checkbox" type = "checkbox"
                  /> <label>Sim</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Não</label>
                </div>
                <div className="div-checkbox">
                  <p>Vinculo com alguém politicamente exposto ??</p>  <input className="input-checkbox" type = "checkbox"
                    /> <label>Sim</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Não</label>
                </div>
                <p>CEP:</p>  <input className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="div-imput">       
                <p>Tipo de imovel:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Residencia propria?:</p>  <input className="input-checkbox" type = "checkbox"
                    /> <label>Sim</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Não</label>
                </div>
                <p>Complemento, numero da residencia e detalhes sobre a moradia caso necessário</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                
              </div>
              
            </div>
            <div className="button-simulation">
              <button>Simular</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default simulation;
