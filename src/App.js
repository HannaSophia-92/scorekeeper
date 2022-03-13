import PlayPage from "./pages/PlayPage";
import HistoryPage from "./pages/HistoryPage";
import CreateGamePage from "./pages/CreateGamePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  console.log(players);

  return (
    <AppLayout>
      <Header>scorekeeper</Header>
      <Routes>
        <Route path="/" element={<PlayPage onCreateGame={createGame} />} />
        <Route
          path="/create"
          element={
            <CreateGamePage
              nameOfGame={nameOfGame}
              players={players}
              onPlayerNames={handlePlayerNames}
              onDecrementPlayerScore={decrementPlayerScore}
              onIncrementPlayerScore={incrementPlayerScore}
              onResetScores={resetScores}
              onEndGame={endGame}
            />
          }
        />
        <Route path="/history" element={<HistoryPage history={history} />} />
      </Routes>
      <Navigation />
    </AppLayout>
  );

  function handlePlayerNames(name) {
    setPlayers(name);
  }

  function createGame({ nameOfGame, playerName }) {
    setNameOfGame(nameOfGame);
    setPlayers(playerName.map((name) => ({ name, score: 0, id: nanoid() })));
    navigate("./create");
  }

  function incrementPlayerScore(index) {
    const player = players[index];

    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decrementPlayerScore(index) {
    const player = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...player, score: player.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetScores() {
    setPlayers(players.map((player) => ({ ...player, score: 0 })));
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: nanoid() }, ...history]);
    setPlayers([]);
    setNameOfGame("");
    navigate("./");
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 10px;
  padding: 20px;
`;

const Header = styled.h1`
  margin: 10px;
  text-align: center;
  font-size: 1.6rem;
  color: #1209af;
  border-bottom: 2px solid #1209af;
`;

export default App;
