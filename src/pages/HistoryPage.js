import History from "../components/History";

export default function HistoryPage({ history }) {
  return (
    <div>
      <h2>Previous Games</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <History key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </div>
  );
}
