import styled from 'styled-components';

export default function Player({
  name,
  score,
  onIncrementPlayerScore,
  onDecrementPlayerScore,
}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <ButtonMinus
        aria-label="Decrement Score"
        onClick={onDecrementPlayerScore}
      >
        -
      </ButtonMinus>
      <Score>{score}</Score>
      <ButtonPlus aria-label="Increment Score" onClick={onIncrementPlayerScore}>
        +
      </ButtonPlus>
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

const ButtonPlus = styled.button`
  background-color: seagreen;
  text-decoration: none;
  border: none;
  padding: 4px 12px;
  margin: 5px 8px;
  color: white;
`;

const ButtonMinus = styled.button`
  background-color: crimson;
  text-decoration: none;
  border: none;
  padding: 4px 12px;
  margin: 5px 8px;
  color: white;
`;
