import styled from "styled-components";
import { FaSync } from "react-icons/fa";

export const CryptoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  @media only screen and (max-width: 85em) {
    padding: 3rem 3rem;
    height: auto;
  }

  @media only screen and (max-width: 30em) {
    padding: 3rem 3rem;
    height: auto;
  }
`;

export const CardHolder = styled.div`
  height: ${({ loaded }) => (loaded ? "auto" : "100vh")};
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  align-items: ${({ loaded }) => (loaded ? "center" : "flex-start")};
  margin-top: 1rem;
  margin-bottom: 6rem;
  flex-wrap: wrap;
`;

export const OverView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ windowsize }) => windowsize < 700 && "column"};
  gap: ${({ windowsize }) => windowsize < 700 && "1rem"};
  align-items: center;
  justify-content: space-between;
`;

export const HeadOverview = styled.h2`
  color: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};
`;

export const LastUpdated = styled.p`
  color: ${({ color }) => (color === "dark" ? "#838E95" : "#457B9D")};
`;

export const ReloadButton = styled.div`
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  background: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SyncIcon = styled(FaSync)`
  color: ${({ color }) => (color === "light" ? "#F7F7F7" : "#374E6A")};
`;

export const SelectCurrency = styled.select`
  background: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};
  color: ${({ color }) => (color === "light" ? "#F7F7F7" : "#374E6A")};
  padding: 0.24rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  width: 100%;
  margin-right: 100px;
  font-weight: 500;
`;

export const SelectDiv = styled.div`
  width: 100px;
  margin-right: 100px;
`;

export const GraphArea = styled.div`
  /* background: red; */
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const RightGraph = styled.div`
  /* background: green; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const GraphSelector = styled.div`
  /* background: red; */
  background: ${({ color }) => (color === "dark" ? "#F7F7F7" : "#374E6A")};

  height: 30px;
  width: 100px;
  margin-right: 5rem;
  border-radius: 2rem;
`;
