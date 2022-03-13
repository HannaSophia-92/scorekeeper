import GameForm from "../components/GameForm";

export default function PlayPage({ onCreateGame }) {
  return <GameForm onCreateGame={onCreateGame} />;
}
