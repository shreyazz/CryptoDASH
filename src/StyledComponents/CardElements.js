import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
export const CardMain = styled.div`
  background: ${({ color }) => (color === "dark" ? "#1C3A63" : "#f8fff5")};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  width: 300px;
  padding: 1rem;
`;

export const CoinImage = styled.img`
  border-radius: 50%;
`;

export const Name = styled.h1`
  color: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};
  font-size: 24px;
`;

export const Price = styled.p`
  color: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};
  font-size: 18.5px;
  margin-block: 0.56rem;
  font-weight: 600;
  letter-spacing: 1.25px;
`;

export const Perc24Hour = styled.p`
  font-size: 17px;
  position: relative;
  color: ${({ loss }) => (loss ? "#E63946" : "#39E65F")};
`;

export const Indicator = styled(AiFillCaretDown)`
  color: ${({ loss }) => (loss ? "#E63946" : "#39E65F")};
  transform: rotate(${({ loss }) => (loss ? "0deg" : "180deg")});
  position: relative;
  top: 2px;
  font-size: 17px;
`;
