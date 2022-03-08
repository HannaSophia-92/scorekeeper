import "./Input.css";

export default function Input({ title }) {
  return (
    <form className="Form__container">
      <label htmlFor="Input-Game">{title}</label>
      <input type="text" id="Input-Game" placeholder="e.g. scribble.io"></input>
      <label htmlFor="Input-Game">Player Name</label>
      <input type="text" id="Input-Game" placeholder="e.g. Jane Doe"></input>
    </form>
  );
}
