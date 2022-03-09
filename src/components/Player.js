import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <button className="Player__button" onClick={onDecrement}>
        -
      </button>
      <Score>{score}</Score>
      <button className="Player__button" onClick={onIncrement}>
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
