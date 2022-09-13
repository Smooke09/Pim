import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";

const ChangeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default ChangeRoutes;
