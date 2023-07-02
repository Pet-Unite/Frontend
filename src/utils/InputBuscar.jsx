import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 580px;
  height: 35px;
`;
const Input = styled.input`
  padding: 0 4px 0 18px;
  border: 1px solid var(--Principal);
  border-radius: 30px 0 0 30px;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: var(--Principal);
  &:focus {
    outline: none;
    border-color: var(--Secundario);
  }
`;
const Icono = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  right: 0px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  border: 1px solid var(--Principal);
  background-color: var(--Principal);
  border-left: transparent;
  img {
    user-select: none;
    object-fit: cover;
    height: 20px;
    width: 20px;
  }
`;

const InputBuscar = ({ onChange, value }) => {
  return (
    <Label htmlFor="Buscar">
      <Input
        id="Buscar"
        type="text"
        placeholder="Ingresa el nombre de una raza..."
        value={value}
        onChange={onChange}
      />
      <Icono>
        <img src="/icons/Buscar.svg" alt="" />
      </Icono>
    </Label>
  );
};

export default InputBuscar;
