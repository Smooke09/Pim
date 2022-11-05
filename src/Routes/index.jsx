import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Simulation from "../Pages/Simulation";
import Profile from "../Pages/Profile";
import { AuthProvider } from "../context/auth";

const ChangeRoutes = () => {
  const user = localStorage.getItem("user");

  const ValidateUser = ({ children }) => {
    if (user) {
      return children;
    } else {
      return <Login />;
    }
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route
          path="/simulation"
          element={
            <ValidateUser>
              <Simulation />
            </ValidateUser>
          }
        />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </AuthProvider>
  );
};

export default ChangeRoutes;
