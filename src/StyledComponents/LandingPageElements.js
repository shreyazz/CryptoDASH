import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingWrapper = styled.div`
  height: 90vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
  /* background: red; */
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    padding: 3rem 1rem;
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const LeftLanding = styled.div`
  height: 60%;
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin: 0 auto 5rem auto;
  }
`;
export const RightLanding = styled.div`
  @media only screen and (max-width: 480px) {
    margin: 2rem auto 4rem auto;
  }
`;

export const Title = styled.h1`
  color: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
  font-weight: 500;
  span {
    color: #e63946;
    font-weight: 600;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 27px;
  }
`;
export const UlFeatures = styled.ul`
  margin-block: 1rem 2.75rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    font-size: 27px;
  }
`;

export const LiFeature = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-block: 2rem;
  font-size: 18px;
  font-weight: 400;
  color: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
  @media only screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const LiImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 0.75rem;
  @media only screen and (max-width: 480px) {
    height: 22px;
    width: 22px;
  }
`;

export const CTA = styled(Link)`
  text-decoration: none;
  background: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};
  border: none;
  padding: 0.75rem 1.75rem;
  color: ${({ color }) => (color === "dark" ? "#E63946 " : "#F1FAEE")};
  border-radius: 7rem;
  text-transform: uppercase;
  font-weight: 600;
  @media only screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const MainImage = styled.img`
  @media only screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;
