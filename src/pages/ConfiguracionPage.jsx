import styled from "styled-components";

import Configuracion from "../components/configuracion-usuario/Configuracion";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  gap: 20px;
  padding: 20px 0;
  margin: auto;
`;
const ConfiguracionPage = () => {
  return (
    <>
      <Main>
        <Configuracion />
      </Main>
    </>
  );
};

export default ConfiguracionPage;
