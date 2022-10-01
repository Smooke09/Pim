import React from "react";
import "./styles.scss";

const login = () => {
  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="box-login">
          <div className="content-left">
            <div className="content-text">
              <h1>Login</h1>
              <p>
                Entre em contato conosco <br />
                para ter uma consultoria gratuita!
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="content-text-right">
              <h1>
                Se preferir, entre em <br />
                contato conosco pelo WhatsApp
              </h1>
              <div className="button-login">
                <button>Solicitar contato</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
