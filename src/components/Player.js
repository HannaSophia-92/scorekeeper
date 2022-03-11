import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <button aria-label="Decrease Score" onClick={onDecrement}>
        -
      </button>
      <Score>{score}</Score>
      <button aria-label="Increase Score" onClick={onIncrement}>
        +
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: right;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 5px;
`;
