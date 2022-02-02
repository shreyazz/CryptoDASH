import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import sun from "./images/sun.svg";
import moon from "./images/moon.svg";
import LoginReg from "./pages/LoginReg";
import Crypto from "./pages/Crypto";
import AllCryptos from "./pages/AllCryptos";
const App = () => {
  const [theme, setTheme] = useState("light");
  const [isDark, setIsDark] = useState(false);
  // state can't be changed from dark to light, so I have created another toggle state which switches b/w true and false.
  // This 👇🏻 useEffect is triggered when the state changes and if the isDark state is true then the theme switches to 'dark' else 'light'

  useEffect(() => {
    isDark ? setTheme("dark") : setTheme("light");
  }, [isDark]);

  return (
    <>
      <NavBar theme={theme} />
      <Routes>
        <Route path="/" index element={<LandingPage theme={theme} />} />
        <Route path="/fav-crypto" index element={<Crypto theme={theme} />} />
        <Route
          path="/all-crypto"
          index
          element={<AllCryptos theme={theme} />}
        />
        <Route path="/onboarding" index element={<LoginReg theme={theme} />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <div
        className="toggler"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {/* transition issue 👇🏻 (For more ref check index.css) */}
        {/* if the theme is dark then the toggle ball should move to right, but it isn't moving smoothly even after using transition.. */}
        <div className={`${isDark ? "goRight" : ""} toggle-ball`}></div>
        <img src={sun} alt="" className="sun" />
        <img src={moon} alt="" className="moon" />
      </div>
    </>
  );
};

export default App;
