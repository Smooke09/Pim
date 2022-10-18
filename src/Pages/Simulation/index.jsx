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
              <div className="div-imput" id="input1">
                <p>Nome:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>RG:</p>  <input type="number" className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>CPF:</p>  <input type="number" className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Gênero:</p>  <input className="input-checkbox" type = "checkbox"
                  /> <label>Masculino</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Feminino</label> <br />
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Outro</label>
                </div>
                <p>Número de contato:</p>  <input type="tel" className="input-normal"
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
                <p>Data de nascimento:</p>  <input type="date" className="input-normal"
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
                <p>Registro de condução:</p>  <input type="number" className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Faixa de renda mensal:</p>  <input type="number" className="input-normal"
                onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Politicamente exposto?:</p>  <input className="input-checkbox" type = "checkbox"
                  /> <label>Sim</label>
                  <input className="input-checkbox" type = "checkbox"
                  /> <label>Não</label>
                </div>
                <div className="div-checkbox">
                  <p>Vínculo com alguém politicamente exposto ??</p>  <input className="input-checkbox" type = "checkbox"
                    /> <label>Sim</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Não</label>
                </div>
                <p>CEP:</p>  <input type="number" className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="div-imput">       
                <p>Tipo de imóvel:</p>  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Residência propria?:</p>  <input className="input-checkbox" type = "checkbox"
                    /> <label>Sim</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Não</label>
                </div>
                <p>Complemento, número da residência e detalhes sobre a moradia caso necessário</p>  
                  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Trabalho:</p>  
                  <input className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Risco do trabalho:</p>  <input className="input-checkbox" type = "checkbox"
                    /> <label>Extremo</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Alto</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Médio</label> <br />
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Baixo</label>
                    <input className="input-checkbox" type = "checkbox"
                    /> <label>Nulo</label>
                </div>
                <p>Email:</p>  <input type="email" className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
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
