import PlayPage from "./pages/PlayPage";
import HistoryPage from "./pages/HistoryPage";
import CreateGamePage from "./pages/CreateGamePage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateGame from "./components/CreateGame";

function App() {
  return (
    <>
      <h1>scorekeeper</h1>
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/create" element={<CreateGamePage />} />
      </Routes>
      <CreateGame />
      <Navigation />
    </>
  );
}

export default App;
