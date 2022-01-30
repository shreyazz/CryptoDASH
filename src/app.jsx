import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import News from "./pages/News";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <NavBar theme={theme} />
      <Routes>
        <Route path="/" index element={<LandingPage theme={theme} />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <div style={{ position: "absolute", bottom: 0 }}>
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
      </div>
    </>
  );
};

export default App;
