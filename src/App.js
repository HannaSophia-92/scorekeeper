import PlayPage from "./pages/PlayPage";
import HistoryPage from "./pages/HistoryPage";
import CreateGamePage from "./pages/CreateGamePage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateGame from "./components/CreateGame";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player1", score: 0, id: "1" },
    { name: "Player2", score: 0, id: "2" },
    { name: "Player3", score: 0, id: "3" },
    { name: "Player4", score: 0, id: "4" },
  ]);

  return (
    <AppLayout>
      <Header>scorekeeper</Header>
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/create"
          element={
            <CreateGamePage
              players={players}
              onPlayerNames={handlePlayerNames}
              onDecrementPlayerScore={decrementPlayerScore}
              onIncrementPlayerScore={incrementPlayerScore}
            />
          }
        />
      </Routes>
      <CreateGame />
      <Navigation />
    </AppLayout>
  );

  function handlePlayerNames(name) {
    setPlayers(name);
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
`;

export default App;
