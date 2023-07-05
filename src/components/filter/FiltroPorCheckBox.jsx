import styled from "styled-components";
import InputRadio from "../../utils/InputRadio";

const Box = styled.div`
  display: flex;
  width: 95.7%;
  margin: auto;
  gap: 0 10px;
`;

const FiltroPorCheckBox = ({ valueRadio, onChangeValueRadio }) => {
  return (
    <>
      <Box>
        <InputRadio
          htmlForTodo="Todo"
          value="http://localhost:8000/mascotas/"
          texto="Todo"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "http://localhost:8000/mascotas/"}
        />
        <InputRadio
          htmlFor="Perro"
          value="http://localhost:8000/mascotas/perro"
          texto="Perros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "http://localhost:8000/mascotas/perro"}
        />
        <InputRadio
          htmlFor="Gato"
          value="http://localhost:8000/mascotas/gato"
          texto="Gatos"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "http://localhost:8000/mascotas/gato"}
        />
        <InputRadio
          htmlFor="Roedor"
          value="http://localhost:8000/mascotas/roedor"
          texto="Roedores"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "http://localhost:8000/mascotas/roedor"}
        />
        <InputRadio
          htmlFor="Pajaro"
          value="http://localhost:8000/mascotas/pajaro"
          texto="Pajaros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "http://localhost:8000/mascotas/pajaro"}
        />
      </Box>
    </>
  );
};

export default FiltroPorCheckBox;
