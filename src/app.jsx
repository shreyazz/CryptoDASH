import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
export const theme = createContext("light");

const app = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/landing" index element={<LandingPage />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default app;
