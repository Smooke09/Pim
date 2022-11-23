import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import connection from "../API/connection";
import { Error, Success } from "../Components/Error";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const login = (email, password, loading) => {
    loading(true);
    const user = {
      email,
      senha: password,
    };
    connection
      .post("/public/login", user)
      .then((response) => {
        const data = {
          id: response.data.user.id,
          user: response.data.user.email,
          token: response.data.token,
          cliente_id: response.data.user.id_pessoa,
        };
        navigate("/home");
        Success({ message: "Login realizado com sucesso!" });
        localStorage.setItem("user", JSON.stringify(data));
        setAuthenticated(true);
      })
      .catch((error) => {
        loading(false);
        Error({
          message: error.response.data,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        login,
      }}
      children={children}
    />
  );
};
