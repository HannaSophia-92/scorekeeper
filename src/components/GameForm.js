import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";

export default function GameForm() {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerName, setPlayerName] = useState("");

  return (
    <Form
      aria-labelledby="formHeading"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 id="formHeading">Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. scribble.io"
        value={nameOfGame}
        onChange={(event) => setNameOfGame(event.target.value)}
        required
      />
      <Input
        name="playerName"
        labelText="Player names"
        placeholder="e.g Jane, John"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
        required
      />
      <Button>Create Game</Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    setNameOfGame("");
    setPlayerName("");
  }
}

const Form = styled.form`
  display: grid;
  gap: 10px;
`;
