import styled from "styled-components";

export default function Input() {
  return (
    <FormContainer>
      <label htmlFor="Input-Game">Name of Game</label>
      <input type="text" id="Input-Game" placeholder="e.g. scribble.io"></input>
      <label htmlFor="Input-Game">Player Name</label>
      <input type="text" id="Input-Game" placeholder="e.g. Jane Doe"></input>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
