import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Filtro from "../../components/filter/Filtro";
import UsuarioLogin from "./UsuarioLogin";

const Nav = styled.nav`
  display: flex;
  position: relative;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  gap: 25px;
  height: 60px;
  width: 100%;
  z-index: 6;
  background-color: #151515;
`;
const Box_Logo_Buscar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  p {
    font-size: 18px;
  }
  img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const Btn = styled.button`
  padding: 6px 18px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;
const Box_Router_Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  a {
    font-size: 17.5px;
  }
`;

const BuscadorSuperior = () => {
  const navigate = useNavigate();
  const routeIngresar = () => navigate("/ingresar");

  return (
    <>
      <Nav>
        <Box>
          <Box_Logo_Buscar>
            <Logo href="/">
              <img src="/Logo.jfif" alt="" />
              <p>Pet unite</p>
            </Logo>
            <Filtro />
          </Box_Logo_Buscar>

          <Box_Router_Btn>
            <a href="/">Inicio</a>

            <a href="/agregar-mascota">Añadir</a>
            
            {false ? (
              <Btn type="button" onClick={routeIngresar}>
                Ingresar
              </Btn>
            ) : (
              <UsuarioLogin />
            )}
          </Box_Router_Btn>
        </Box>
      </Nav>
    </>
  );
};

export default BuscadorSuperior;
