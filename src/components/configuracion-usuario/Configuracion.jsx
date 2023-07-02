import styled from "styled-components";
import Texto from "./Texto";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  margin: auto;
  padding: 25px 5px;
  background-color: #151515;
  border-radius: 5px;
`;
const Box_Configuracion = styled.div`
  display: flex;
`;
const Box_Router = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  gap: 10px;
`;
const Imagen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  margin: 0 auto auto auto;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transition: 0.35s linear;
  }
  :hover {
    img {
      transform: scale(1.15);
    }
  }
`;
const Box_Datos = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
const Btn = styled.button`
  padding: 10px 35px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 50px auto 0 auto;
`;

const Configuracion = () => {
  return (
    <>
      <Main>
        <Box_Configuracion>
          <Box_Router>
            <Imagen>
              <img src="" alt="" />
            </Imagen>
          </Box_Router>
          <Box_Datos>
            <Texto
              htmlFor="Nombre de usuario"
              placeHolder="Nuvato"
              value=""
              onChange=""
            />

            <Texto
              htmlFor="Correo electronico"
              placeHolder="example@example.com"
              value=""
              onChange=""
            />
            <Texto
              htmlFor="Contraseña"
              placeHolder="!!!"
              value=""
              onChange=""
            />
          </Box_Datos>
        </Box_Configuracion>

        <Btn>Guardar cambios</Btn>
      </Main>
    </>
  );
};

export default Configuracion;
