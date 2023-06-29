import styled from "styled-components";

const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
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
  padding: 6px 8px;
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

const InputRadio = ({ name, children, onChange }) => {
  return (
    <>
      <Label htmlFor={children}>
        <Input
          id={children}
          value={children}
          type="radio"
          name={name}
          onChange={onChange}
          texto={children}
        />
      </Label>
    </>
  );
};

export default InputRadio;
