import "./Player.css";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <section className="Player">
      <span className="Player__name">{name}</span>
      <button className="Player__button" onClick={onDecrement}>
        -
      </button>
      <span className="Player__score">{score}</span>
      <button className="Player__button" onClick={onIncrement}>
        +
      </button>
    </section>
  );
}
