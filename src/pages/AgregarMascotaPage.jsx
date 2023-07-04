import styled from "styled-components";
import PostMascota from "../components/agregar-una-mascota/PostMascota";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  gap: 20px;
  padding: 20px 0;
  margin: auto;
`;

const AgregarMascotaPage = () => {
  return (
    <>
      <Main>
        <PostMascota />
      </Main>
    </>
  );
};

export default AgregarMascotaPage;
