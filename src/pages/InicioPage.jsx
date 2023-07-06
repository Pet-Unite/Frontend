import styled from "styled-components";
import { useState } from "react";

import FiltroPorCheckBox from "../components/filter/FiltroPorCheckBox";
import MapDeTarjetas from "../components/tarjetas/MapDeTarjetas";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  gap: 20px;
  padding: 20px 0;
  margin: auto;
`;

const InicioPage = () => {
  const [valueRadio, setValueRadio] = useState(
    "http://localhost:8000/mascotas/all"
  );
  const onChangeValueRadio = (e) => setValueRadio(e.target.value);

  return (
    <>
      <Main>
        <FiltroPorCheckBox
          valueRadio={valueRadio}
          onChangeValueRadio={onChangeValueRadio}
        />
        <MapDeTarjetas valueRadio={valueRadio} />
      </Main>
    </>
  );
};

export default InicioPage;
