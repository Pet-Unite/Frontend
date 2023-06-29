import styled from "styled-components";
import Filtro from "../../components/filter/Filtro";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  gap: 25px;
  height: 60px;
  width: 100%;
`;
const Box_Rutas = styled.div`
  img {
    object-fit: cover;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;
const Btn = styled.button`

    padding: 5px 10px;
    border-radius: 3px;
    border: 1px solid white;

`;

const BuscadorSuperior = () => {
  const navigate = useNavigate();
  const routeIngresar = () => navigate("/ingresar");

  return (
    <>
      <Nav>
        <Box>
          <Box_Rutas>
            <img src="/icons/Nav.svg" alt="" />
          </Box_Rutas>
          <Filtro />

            <Btn type="button" onClick={routeIngresar}>
              Ingresar
            </Btn>
        </Box>
      </Nav>
    </>
  );
};

export default BuscadorSuperior;
