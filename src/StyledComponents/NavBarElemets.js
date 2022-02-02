import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export const LogoLink = styled(Link)`
  color: ${({ color }) => (color === "light" ? "#E63946" : "#A8DADC")};
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  @media only screen and (max-width: 30em) {
    font-size: 24px;
  }
`;

export const Nav = styled.div`
  height: 10vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
  @media only screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

export const NormalLink = styled(Link)`
  color: ${({ color }) => (color === "light" ? "#1D3557" : "#F1FAEE")};
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;
  margin-right: 100px;
`;

export const ButtonPrimary = styled(Link)`
  text-decoration: none;
  background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
  border: none;
  padding: 0.75rem 1.75rem;
  color: ${({ color }) => (color === "dark" ? "#E63946 " : "#F1FAEE")};
  border-radius: 7rem;
  text-transform: uppercase;
  font-weight: 600;

  @media only screen and (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const ButtonSec = styled(Link)`
  text-decoration: none;
  background: transparent;
  padding: 0.65rem 1.75rem;
  color: ${({ color }) => (color === "light" ? "#E63946 " : "#F1FAEE")};
  border-radius: 7rem;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid #457b9d;
  margin-right: 1.5rem;
  transition: all 0.4s ease;
  @media only screen and (max-width: 30em) {
    padding: 0.4rem 0.75rem;
    margin-right: 0.5rem;
  }
  &:hover {
    background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
    color: ${({ color }) => (color === "dark" ? "#E63946" : "#F1FAEE")};
    border: 2px solid transparent;
    transition: all 0.4s ease;
  }
`;

export const RightNav = styled.div`
  width: 700px;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 30em) {
    display: none;
  }
`;

export const HamBurger = styled(FaBars)`
  font-size: 23px;
  z-index: 4;
  display: none;
  @media only screen and (max-width: 480px) {
    color: ${({ color }) => (color === "dark" ? "#E63946" : "#1D3557")};
    display: inline;
  }
`;

export const Cross = styled(FaTimes)`
  font-size: 23px;
  display: none;
  z-index: 4;

  @media only screen and (max-width: 30em) {
    color: ${({ color }) => (color === "dark" ? "#E63946" : "#1D3557")};
    display: inline;
  }
`;

export const NavForMobile = styled.div`
  display: none;
  @media only screen and (max-width: 30em) {
    color: ${({ color }) => (color === "dark" ? "#E63946" : "#1D3557")};
    position: absolute;
    left: 0;
    background: ${({ color }) => (color === "dark" ? "#152741" : "#e2ecdf")};
    right: 0;
    transform: ${({ show }) =>
      show ? "translateY(8rem)" : "translateY(-80rem)"};
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;
