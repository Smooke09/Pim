import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const ChangeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default ChangeRoutes;
