import styled from "styled-components";

export const LogRegWrapper = styled.div`
  height: 90vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
  flex-wrap: wrap;

  h1 {
    /* align-self: flex-end; */
  }

  @media only screen and (max-width: 85em) {
    padding: 3rem 1rem;
    height: auto;
    gap: 3rem;
  }

  @media only screen and (max-width: 30em) {
    padding: 3rem 1rem;
    height: auto;
  }
`;

export const MainWrapper = styled.div`
  height: 70vh;
  width: 60vh;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem;
  background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 1rem;
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  align-self: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
  color: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
`;

export const H1 = styled.h1`
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
`;
export const H3 = styled.h3`
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
`;

export const P = styled.p`
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;
