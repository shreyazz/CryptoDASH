import styled from "styled-components";

export const LogRegWrapper = styled.div`
  height: ${({windowheight}) => (windowheight > 700 ? '90vh' : 'auto')};
  width: 100%;
  padding: ${({windowheight}) => (windowheight > 700 ? '2rem' : '2rem 2rem 6rem 2rem')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
  flex-wrap: wrap;

  @media only screen and (max-width: 85em) {
    gap: 3rem;
  }

`;

export const MainWrapper = styled.div`
  width: 85%;
  max-width: 25rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 0.75rem;
  background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 1rem;
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
  font-size: ${({windowheight}) => (windowheight < 700 ? '1rem' : '1.2rem')};
  font-weight: 600;
  margin-left: 0.6rem;
`;

export const Input = styled.input`
  align-self: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  padding: ${({windowheight}) => (windowheight < 700 ? '0.4rem 1rem' : '0.7rem')};
  border-radius: 2rem;
  border: 2px solid #457b9d;
  color: "#1D3557";
  font-size: 16px;
`;

export const H1 = styled.h1`
  font-size: ${({windowheight}) => (windowheight < 700 && '1.5rem')};
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
`;
export const H3 = styled.h3`
  font-size: ${({windowheight}) => (windowheight < 700 && '1rem')};
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
`;

export const P = styled.p`
  font-size: ${({windowheight}) => (windowheight < 700 && '1rem')};
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const UserMessage = styled.p`
  font-size: ${({windowheight}) => (windowheight < 700 && '1rem')};
  color: ${({ color }) => (color === "light" ? "#F1FAEE" : "#1D3557")};
  margin-top: 0.5rem;
`;
