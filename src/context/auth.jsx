import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import connection from "../API/connection";
import Swal from "sweetalert2";

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
        const data = {
          user: response.data.user.email,
          token: response.data.token,
        };
        localStorage.setItem("user", JSON.stringify(data));
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
          icon: "success",
          title: "Logado com sucesso",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
      });
  };

  return <AuthContext.Provider value={{ login }} children={children} />;
};
