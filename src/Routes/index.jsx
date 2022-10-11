import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Simulation from "../Pages/Simulation"
import { AuthProvider } from "../context/auth";

const ChangeRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default ChangeRoutes;
