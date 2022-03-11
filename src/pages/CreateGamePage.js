import Player from "../components/Player";

export default function CreateGamePage({
  players,
  onDecrementPlayerScore,
  onIncrementPlayerScore,
}) {
  return (
    <>
      <h2>Games</h2>
      {players.map(({ name, score, id }, index) => (
        <Player
          name={name}
          score={score}
          onDecrementPlayerScore={() => onDecrementPlayerScore(index)}
          onIncrementPlayerScore={() => onIncrementPlayerScore(index)}
          key={id}
        />
      ))}
    </>
  );
}
