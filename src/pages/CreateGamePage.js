import Button from "../components/Button";
import Player from "../components/Player";

export default function CreateGamePage({
  players,
  onDecrementPlayerScore,
  onIncrementPlayerScore,
  nameOfGame,
  onResetScores,
  onEndGame,
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
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </>
  );
}
