import styled from "styled-components";

const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: max-content;
  overflow: hidden;
  border-radius: 3px;
  padding: 6px 8px;
`;
const Input = styled.input`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  overflow: hidden;
  border-radius: 3px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  appearance: none;
  position: relative;
  cursor: pointer;
  background-color: #767676;
  ::after {
    content: " ${(props) => props.texto}";
  }
  hover {
    background-color: var(--Principal-Cromatico);
  }
  &:not(:checked) {
    background-color: var(--Principal);
    ::after {
      color: white;
    }
  }

  &:checked {
    background-color: var(--Secundario);
    ::after {
      color: black;
    }
  }
`;

const InputRadio = ({ htmlFor, value, texto, name, onChange, checked }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>
        <Input
          type="radio"
          id={htmlFor}
          value={value}
          name={name}
          texto={texto}
          onChange={onChange}
          checked={checked}
        />
      </Label>
    </>
  );
};

export default InputRadio;
