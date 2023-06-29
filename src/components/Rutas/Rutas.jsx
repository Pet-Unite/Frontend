import styled from "styled-components";
import { motion } from "framer-motion";

const Router = styled(motion.ul)`
  position: absolute;
  bottom: 1px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  gap: 25px;
  padding: 25px 0;
  width: 60px;
  background-color: #151515;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    height: 30px;
    width: 30px;
  }
`;

const Rutas = () => {
  return (
    <>
      <Router
        key="MovilNavegacion"
        initial={{ y: "-100%" }}
        animate={{ y: '100%' }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.45 }}
      >
        <Link href="/">
          <img src="/icons/Inicio.svg" alt="" />
        </Link>
        <Link href="/favoritos">
          <img src="/icons/Favoritos.svg" alt="" />
        </Link>
        <Link href="/configuracion">
          <img src="/icons/Configuracion.svg" alt="" />
        </Link>
      </Router>
    </>
  );
};

export default Rutas;
