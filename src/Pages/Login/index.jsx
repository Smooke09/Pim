import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import "./styles.scss";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container-login-page">
      <div className="login-content">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="login-form">
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
              <Link to="/register">Criar conta</Link>
            </div>
          </div>
          <div className="container-img">
            <img src="img/paginadelogin.jpg" alt="login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
