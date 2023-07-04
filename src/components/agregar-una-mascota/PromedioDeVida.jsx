import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: max-content;
  p {
    font-size: 16px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  p {
    font-size: 18px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  max-width: 68px;
  padding: 5px 10px;
  background-color: var(--Principal);
  border: 1px solid transparent;
  :focus {
    border: 1px solid var(--Secundario);
  }
  ::placeholder {
    color: grey;
  }

  /* Estilos para las flechas */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PromedioDeVida = ({ setValue }) => {
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();

  const onChangeMin = (e) => setMinimo(e.target.value);
  const onChangeMax = (e) => setMaximo(e.target.value);

  useEffect(() => {
    setValue(`${minimo} a ${maximo} años`);
  }, [minimo, maximo]);

  return (
    <>
      <Main>
        <p>¿Cual es su promedio de vida?</p>
        <Box>
          <Label htmlFor="Minimo">
            <Input
              id="Minimo"
              type="number"
              onChange={onChangeMin}
              value={minimo}
              placeholder="10"
              min="0"
              required
            />
          </Label>
          <p>a</p>
          <Label htmlFor="Maximo">
            <Input
              id="Maximo"
              type="number"
              onChange={onChangeMax}
              value={maximo}
              placeholder="15"
              min="0"
              required
            />
          </Label>
          <p>años</p>
        </Box>
      </Main>
    </>
  );
};

export default PromedioDeVida;
