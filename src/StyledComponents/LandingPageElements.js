import styled from "styled-components";

export const LandingWrapper = styled.div`
  height: 80vh;
  width: 100%;
  /* background: red; */
  background: ${({ color }) => (color === "dark" ? "#1D3557" : "#F1FAEE")};
`;
