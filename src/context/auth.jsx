import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import connection from "../API/connection";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = (email, password) => {
    const user = {
      email,
      senha: password,
    };
    connection
      .post("/public/login", user)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <AuthContext.Provider value={{ login }} children={children} />;
};
