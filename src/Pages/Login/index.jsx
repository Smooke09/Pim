import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Error, ErrorCard } from "../../Components/Error";

import "./styles.scss";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      navigate("/home");

      ErrorCard({
        message: "Voce ja esta logado!",
        type: "info",
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Error({ message: "Preencha todos os campos" });
      return;
    }
    login(email, password);
  };

  return (
    <div className="container-login-page">
      <button className="button-goback">
        <a href="/Home">VOLTAR</a>
      </button>
      <div className="login-content">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="login-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="recover-password">
              <Link>Esqueci minha senha</Link>
            </div>
            <div className="button-login">
              <button type="submit">Login</button>
              <Link to="/singup">Criar conta</Link>
            </div>
          </div>
          <div className="container-img fadeInRight">
            <img src="img/paginadelogin.jpg" alt="login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
