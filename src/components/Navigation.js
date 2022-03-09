import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <NavLink to="/">Play</NavLink>
      <NavLink to="/history">History</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  border: none;
  padding: 8px;
  font-size: 1em;
  width: 30%;
`;
