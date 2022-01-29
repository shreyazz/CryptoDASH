import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  color: ${({ color }) => (color === "light" ? "#E63946" : "#A8DADC")};
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
`;

export const Nav = styled.div`
  height: 10vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
`;

export const NormalLink = styled(Link)`
  color: ${({ color }) => (color === "light" ? "#1D3557" : "#F1FAEE")};
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;

  &:first-child {
    margin-right: 4rem;
  }
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

  &:hover {
    background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
    color: ${({ color }) => (color === "dark" ? "#E63946" : "#F1FAEE")};
    border: 2px solid transparent;
    transition: all 0.4s ease;
  }
`;

export const RightNav = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
