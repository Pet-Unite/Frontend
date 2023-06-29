import styled from "styled-components";

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
  return (
    <>
      <Main>
        <FiltroPorCheckBox />
        <MapDeTarjetas />
      </Main>
    </>
  );
};

export default InicioPage;
