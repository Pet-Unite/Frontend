import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;

p {
  font-size: 16px;
}
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: var(--Principal);
  border-radius: 2px;
  padding: 5px 10px;
  border: 1px solid transparent;
  :focus {
    border: 1px solid var(--Secundario);
  }
  ::placeholder {
    color: grey;
  }
`;

const NombreDelAnimal = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="Nombre">
        <p>Cual es el nombre?</p>
        <Input
          id="Nombre"
          type="text"
          placeholder="Golden retriever"
          value={value}
          onChange={onChange}
          required
        />
      </Label>
    </>
  );
};

export default NombreDelAnimal;
