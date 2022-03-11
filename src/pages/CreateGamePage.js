import Player from "../components/Player";

export default function CreateGamePage({
  players,
  decrementPlayerScore,
  incrementPlayerScore,
}) {
  return (
    <>
      <h1>create</h1>
      {players.map(({ name, score, id }, index) => (
        <Player
          name={name}
          score={score}
          onDecrement={() => decrementPlayerScore(index)}
          onIncrement={() => incrementPlayerScore(index)}
          key={id}
        />
      ))}
    </>
  );
}
