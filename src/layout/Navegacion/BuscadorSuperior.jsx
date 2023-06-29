import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import Filtro from "../../components/filter/Filtro";
import Rutas from "../../components/Rutas/Rutas";

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
const Box_Rutas = styled.div`
  img {
    object-fit: cover;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;
const Btn = styled.button`
  padding: 5px 15px;
  border-radius: 20px;
  border: 1px solid white;
`;

const BuscadorSuperior = () => {
  const navigate = useNavigate();
  const routeIngresar = () => navigate("/ingresar");

  const [navegacionMovil, setNavegacionMovil] = useState(false);

  const desplegarNavegacionMovil = () => setNavegacionMovil(!navegacionMovil);

  return (
    <>
      <Nav>
        <Box>
          <Box_Rutas onClick={desplegarNavegacionMovil}>
            <img src="/icons/Nav.svg" alt="" />
          </Box_Rutas>
          <Filtro />

          <Btn type="button" onClick={routeIngresar}>
            Ingresar
          </Btn>
        </Box>
        <AnimatePresence>{navegacionMovil && <Rutas />}</AnimatePresence>
      </Nav>
    </>
  );
};

export default BuscadorSuperior;
