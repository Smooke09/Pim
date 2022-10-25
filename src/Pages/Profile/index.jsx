import React  from "react";
import "./styles.scss";

const profile = () => {
  return (
    <div className="container-profile-page">
        <button className="button-goback">
          <a href="/Home">VOLTAR</a>
        </button>
      <div className="profile-content">
        <form className="form-profile">
          <div className="profile-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="div-h1">
              <h1 className="title-h1">Meu perfil</h1>
            </div>
            <div className="imputs-div">
              <div className="div-imput" id="input1">
                <p>Nome:</p>
                <input className="input-normal"/>

                <p>Email:</p>  
                <input type="email" className="input-normal"/>


                <p>RG:</p>  
                <input type="number" className="input-normal"/>


                <p>CPF:</p>  
                <input type="number" className="input-normal"/>

              </div>  
              <div className="div-imput" id="input2">
                <p>Número de contato:</p>  
                <input className="input-normal"/>

                <p>Estado civil:</p>  
                <input className="input-normal"/>

                <p>Nacionalidade:</p>  
                <input className="input-normal"/>

              </div>
            </div>
            <div className="button-profile">
              <button>Editar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profile;
