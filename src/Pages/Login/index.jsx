import React, { useState, useEffect } from "react";
import connection from "../../API/connection";
import "./styles.scss";

const login = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);

  useEffect(() => {
    connection.get("/client/").then((response) => {
      console.log(response);
    });
  });

  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="box-login">
          <div className="content-left">
            <div className="content-text">
              <h1>Login</h1>
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
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
