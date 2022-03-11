import styled from "styled-components";

export default function Player({
  name,
  score,
  onIncrementPlayerScore,
  onDecrementPlayerScore,
}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <button aria-label="Decrease Score" onClick={onDecrementPlayerScore}>
        -
      </button>
      <Score>{score}</Score>
      <button aria-label="Increase Score" onClick={onIncrementPlayerScore}>
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
