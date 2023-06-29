import styled from "styled-components";

import TarjetaID from "../components/tarjeta-id/TarjetaID";
import Comentarios from "../components/comentarios/comentarios";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  gap: 20px;
  padding: 20px 0;
  margin: auto;
`;

const AnimalPage = () => {
  return (
    <>
      <Main>
        <TarjetaID />
        <Comentarios />
      </Main>
    </>
  );
};

export default AnimalPage;
