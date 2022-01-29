import React, { createContext } from "react";
import { Link } from "react-router-dom";
import { LogoLink } from "../StyledComponents/NavBarElemets";
const NavBar = () => {
  return (
    <>
      <nav>
        <LogoLink to="/landing" color="light">
          CryptoDASH
        </LogoLink>
      </nav>
    </>
  );
};

export default NavBar;
