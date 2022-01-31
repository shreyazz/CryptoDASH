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
  flex-wrap: wrap;

  @media only screen and (max-width: 85em) {
    padding: 3rem 1rem;
    height: auto;
    flex-direction: column-reverse;
    gap: 3rem;
  }

  @media only screen and (max-width: 30em) {
    padding: 3rem 1rem;
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const LeftLanding = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 85em) {
    height: 100%;
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 5rem;
    align-items: center;
  }

  @media only screen and (max-width: 30em) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 5rem;
  }
`;
export const RightLanding = styled.div`
  @media only screen and (max-width: 30em) {
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
  @media only screen and (max-width: 30em) {
    width: 100%;
    text-align: center;
    font-size: 27px;
  }
`;
export const UlFeatures = styled.ul`
  padding: 1rem 0 2.75rem 0;

  @media only screen and (max-width: 85em) {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 70em) {
    width: 85%;
  }

  @media only screen and (max-width: 30em) {
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
  padding: 1.5rem 0;
  font-size: 18px;
  font-weight: 400;
  color: ${({ color }) => (color === "dark" ? "#F1FAEE" : "#1D3557")};

  @media only screen and (max-width: 85em) {
    width: 80%;
    align-items: flex-start;
    gap: 2rem;
    text-align: left;
  }

  @media only screen and (max-width: 30em) {
    font-size: 17px;
  }
`;

export const LiImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 0.75rem;
  @media only screen and (max-width: 30em) {
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
  @media only screen and (max-width: 30em) {
    margin: 0 auto;
  }
`;

export const MainImage = styled.img`
  @media only screen and (max-width: 30em) {
    height: 100%;
    width: 100%;
  }
`;
