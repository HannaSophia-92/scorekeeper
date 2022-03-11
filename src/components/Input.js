import styled from "styled-components";

export default function Input({
  name,
  labelText,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <InputStyled
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

const InputStyled = styled.input`
  border: 2px solid #bbb;
  height: 30px;
`;
