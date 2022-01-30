import React from "react";
import {
  LogoLink,
  Nav,
  NormalLink,
  ButtonPrimary,
  ButtonSec,
  RightNav,
} from "../StyledComponents/NavBarElemets";

const NavBar = ({ theme }) => {
  return (
    <>
      <Nav color={theme}>
        <LogoLink to="/" color={theme}>
          CryptoDASH
        </LogoLink>
        <RightNav>
          <div>
            <NormalLink color={theme} to="/crypto">
              Crypto
            </NormalLink>
            <NormalLink color={theme} to="/news">
              News
            </NormalLink>
          </div>
          <div>
            <ButtonSec color={theme} to="/login">
              login
            </ButtonSec>
            <ButtonPrimary color={theme} to="/register">
              Register
            </ButtonPrimary>
          </div>
        </RightNav>
      </Nav>
    </>
  );
};

export default NavBar;
