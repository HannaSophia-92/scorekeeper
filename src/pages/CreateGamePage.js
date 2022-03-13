import Player from "../components/Player";

export default function CreateGamePage({
  players,
  onDecrementPlayerScore,
  onIncrementPlayerScore,
  nameOfGame,
}) {
  return (
    <>
      <h2>Games</h2>
      <h3>{nameOfGame}</h3>
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
