import styled from "styled-components";
import { Link } from "react-router-dom";
export const LogoLink = styled(Link)`
  color: ${({ color }) => (color === "light" ? "#E63946" : "#A8DADC")};
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
`;
