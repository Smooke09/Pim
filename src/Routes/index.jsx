import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUpProfile";
import SingUpProfile from "../Pages/SingUp";
import Simulation from "../Pages/Simulation";
import Profile from "../Pages/Profile";
import { AuthProvider } from "../context/auth";
import Modal from "../Pages/Modal";

const ChangeRoutes = () => {
  const ValidateUser = ({ children }) => {
    const user = localStorage.getItem("user");

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
        <Route path="/singup" element={<SingUpProfile />} />
        <Route path="/singup/profile" element={<SingUp />} />
        <Route
          path="/simulation"
          element={
            <ValidateUser>
              <Simulation />
            </ValidateUser>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modal/simulation" element={<Modal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default ChangeRoutes;
