import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function CreateGame() {
  return <CreateButton to="/create">Create Game</CreateButton>;
}

const CreateButton = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;
  background-color: #ddd;
  border: none;
  padding: 4px 12px;
  margin: 5px 0;
`;
