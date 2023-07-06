import styled from "styled-components";
import InputRadio from "../../utils/InputRadio";

const Box = styled.div`
  display: flex;
  width: 95.7%;
  margin: auto;
  gap: 0 10px;
`;

const FiltroPorCheckBox = ({ valueRadio, onChangeValueRadio }) => {
  // Agregar las url en una const!!

  const UrlAll = "http://localhost:8000/mascotas/all";
  const UrlPerro = "http://localhost:8000/mascotas/category/perro";
  const UrlGato = "http://localhost:8000/mascotas/category/gato";
  const UrlRoedor = "http://localhost:8000/mascotas/category/roedor";
  const UrlPajaro = "http://localhost:8000/mascotas/category/pajaro";
  
  return (
    <>
      <Box>
        <InputRadio
          htmlForTodo="Todo"
          value={UrlAll}
          texto="Todo"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === UrlAll}
        />
        <InputRadio
          htmlFor="Perro"
          value={UrlPerro}
          texto="Perros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === UrlPerro}
        />
        <InputRadio
          htmlFor="Gato"
          value={UrlGato}
          texto="Gatos"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === UrlGato}
        />
        <InputRadio
          htmlFor="Roedor"
          value={UrlRoedor}
          texto="Roedores"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === UrlRoedor}
        />
        <InputRadio
          htmlFor="Pajaro"
          value={UrlPajaro}
          texto="Pajaros"
          name="Mascotas"
          onChange={onChangeValueRadio}
          checked={valueRadio === UrlPajaro}
        />
      </Box>
    </>
  );
};

export default FiltroPorCheckBox;
