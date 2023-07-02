import { useState } from "react";

import styled from "styled-components";
import InputRadio from "../../utils/InputRadio";

const Box = styled.div`
  display: flex;
  width: 95.7%;
  margin: auto;
  gap: 0 15px;
`;

const FiltroPorCheckBox = () => {
  const [radioCheck, setRadioCheck] = useState("");

  const onChangeRadio = (e) => {
    const value = e.target.value;
    setRadioCheck(value);
  };
  console.log(radioCheck);
  return (
    <>
      <Box>
        <InputRadio name="TipoDeMascota" onChange={onChangeRadio}>
          Todo
        </InputRadio>
        <InputRadio name="TipoDeMascota" onChange={onChangeRadio}>
          Perro
        </InputRadio>
        <InputRadio name="TipoDeMascota" onChange={onChangeRadio}>
          Gato
        </InputRadio>
        <InputRadio name="TipoDeMascota" onChange={onChangeRadio}>
          Roedor
        </InputRadio>
        <InputRadio name="TipoDeMascota" onChange={onChangeRadio}>
          Pajaro
        </InputRadio>
      </Box>
    </>
  );
};

export default FiltroPorCheckBox;
