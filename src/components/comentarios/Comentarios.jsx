import styled from "styled-components";

import Getcomentario from "./Getcomentario";
import Postcomentario from "./Postcomentario";

const Main = styled.div`
  margin: 25px auto;
  width: 95%;
  max-width: 1100px;
`;

const Comentarios = () => {
  return (
    <>
      <Main>
        <Postcomentario />
        <Getcomentario />
      </Main>
    </>
  );
};

export default Comentarios;
