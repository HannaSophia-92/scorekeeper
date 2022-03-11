import PlayPage from "./pages/PlayPage";
import HistoryPage from "./pages/HistoryPage";
import CreateGamePage from "./pages/CreateGamePage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateGame from "./components/CreateGame";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player1", score: 0, id: "1" },
    { name: "Player2", score: 0, id: "2" },
    { name: "Player3", score: 0, id: "3" },
    { name: "Player4", score: 0, id: "4" },
  ]);

  return (
    <>
      <h1>scorekeeper</h1>
      {players.map(({ name, score, id }, index) => (
        <Player
          name={name}
          score={score}
          onDecrement={() => decrementPlayerScore(index)}
          onIncrement={() => incrementPlayerScore(index)}
          key={id}
        />
      ))}
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/create" element={<CreateGamePage />} />
      </Routes>
      <CreateGame />
      <Navigation />
    </>
  );

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

export default App;
