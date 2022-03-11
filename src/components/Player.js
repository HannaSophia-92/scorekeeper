import styled from "styled-components";
import Button from "./Button";

export default function Player({
  name,
  score,
  onIncrementPlayerScore,
  onDecrementPlayerScore,
}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Button aria-label="Decrease Score" onClick={onDecrementPlayerScore}>
        -
      </Button>
      <Score>{score}</Score>
      <Button aria-label="Increase Score" onClick={onIncrementPlayerScore}>
        +
      </Button>
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
