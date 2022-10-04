import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Simulation from "../Pages/Simulation";

const ChangeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/simulation" element={<Simulation/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
};

export default ChangeRoutes;
