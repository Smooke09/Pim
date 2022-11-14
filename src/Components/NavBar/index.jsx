import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import "./styles.scss";

const NavBar = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  const logout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/home");
  };

  const goPlan = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const goContats = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="container-navbar">
        <div className="container-fixed-navbar">
          <nav className="content-navbar">
            <div className="content-img">
              <img src="./img/logo1.png" alt="logo" /> {/*Inserção da logo*/}
            </div>
            <div className="content-menu">
              <ul>
                <li>
                  {authenticated ? (
                    <Link to="/profile">Meu perfil</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
                <li>
                  <button className="button" onClick={goPlan}>
                    Planos
                  </button>
                </li>
                <li>
                  <button className="button">
                    <a href="download/tabelas_de_preco.pdf" download>
                      Preços
                    </a>
                  </button>
                </li>
                <li>
                  <button className="button" onClick={goContats}>
                    Suporte
                  </button>
                </li>
                <li>
                  <button className="button" onClick={() => logout()}>
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
