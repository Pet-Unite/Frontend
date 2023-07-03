import styled from "styled-components";
import InputRadio from "../../utils/InputRadio";

const Box = styled.div`
  display: flex;
  width: 95.7%;
  margin: auto;
  gap: 0 10px;
`;

const FiltroPorCheckBox = ({ valueRadio, onChangeValueRadio }) => {
  // En los value de cada Input agregar la url
  // Se usara para llamar al cambiar de opcion en el componente
  // MapDeTarjetas.jsx

  return (
    <>
      <Box>
        <InputRadio
          htmlForTodo="Todo"
          value="https://picsum.photos/200"
          texto="Todo"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "https://picsum.photos/200"}
        />
        <InputRadio
          htmlFor="Perro"
          value="Perro"
          texto="Perros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "Perro"}
        />
        <InputRadio
          htmlFor="Gato"
          value="Gato"
          texto="Gatos"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "Gato"}
        />
        <InputRadio
          htmlFor="Roedor"
          value="Roedor"
          texto="Roedores"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "Roedor"}
        />
        <InputRadio
          htmlFor="Pajaro"
          value="Pajaro"
          texto="Pajaros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === "Pajaro"}
        />
      </Box>
    </>
  );
};

export default FiltroPorCheckBox;
