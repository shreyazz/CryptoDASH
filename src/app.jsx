import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/landing" index element={<LandingPage theme={theme} />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        dark
      </button>
    </>
  );
};

export default App;
