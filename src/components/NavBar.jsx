import React, { useState } from "react";
import {
  LogoLink,
  Nav,
  NormalLink,
  ButtonPrimary,
  ButtonSec,
  RightNav,
  HamBurger,
  Cross,
  NavForMobile,
} from "../StyledComponents/NavBarElemets";

const NavBar = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        {isMenuOpen ? (
          <Cross color={theme} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <HamBurger color={theme} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
        {
          <>
            <NavForMobile color={theme} show={isMenuOpen}>
              <div>
                <NormalLink
                  color={theme}
                  to="/crypto"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Crypto
                </NormalLink>
              </div>
              <ButtonSec
                color={theme}
                to="/login"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                login
              </ButtonSec>
              <ButtonPrimary
                color={theme}
                to="/register"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Register
              </ButtonPrimary>
            </NavForMobile>
          </>
        }
      </Nav>
    </>
  );
};

export default NavBar;
