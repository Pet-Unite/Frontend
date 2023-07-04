import styled from "styled-components";

const Box = styled.select`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100px;
  overflow: hidden;
  border-radius: 2px;
  height: 35px;
  border: 1px solid var(--Principal);
  padding: 0 7px;
`;

const Seleccionar = () => {
  return (
    <>
      <Box name="" id="">
        <option value="">Perro</option>
        <option value="">Gato</option>
        <option value="">Roedor</option>
        <option value="">Pajaro</option>
      </Box>
    </>
  );
};

export default Seleccionar;
