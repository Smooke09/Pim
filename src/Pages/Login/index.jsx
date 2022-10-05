import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Swal from "sweetalert2";

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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        imageWidth: 100,
        imageHeight: 100,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "error",
        title: "Você já está logado",
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos",
      });
      return;
    }
    login(email, password);
  };

  return (
    <div className="container-login-page">
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
