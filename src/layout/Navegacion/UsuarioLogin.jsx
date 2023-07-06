import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { UsuarioLoginContext } from '../../context/DatosUsuario.jsx'

const Usuario = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 30px;
  position: relative;
`;
const Data = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  flex-direction: column;
  gap: 2px;
`;
const Nombre = styled.p`
  font-size: 14px;
  width: max-content;
`;
const Correo = styled.p`
  font-size: 12px;
  width: max-content;
  color: grey;
`;
const Imagen = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border: 1px solid white;
  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Router_User = styled(motion.div)`
  position: absolute;
  background-color: #151515;
  bottom: 0;
  right: 0;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0 5px;
`;
const Link = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  img {
    width: 25px;
    height: 25px;
    object-fit: cover;
  }
`;
const variants = {
  initial: {
    y: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  animate: {
    y: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const UsuarioLogin = () => {
  const { imagenUsuario, correoUsuario, nombreUsuario } = useContext(UsuarioLoginContext);
  const [desplegarMenu, setDesplegarMenu] = useState(false);

  const toggleMenu = () => setDesplegarMenu(!desplegarMenu);
  return (
    <>
      <Usuario>
        <Data>
          <Nombre>{nombreUsuario}</Nombre>
          <Correo>{correoUsuario}</Correo>
        </Data>
        <Imagen onClick={toggleMenu}>
          <img src={imagenUsuario} alt="" />
        </Imagen>
      </Usuario>

      <AnimatePresence>
        {desplegarMenu && (
          <Router_User
            key="Menu"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <Link href="/configuracion">
              Configuracion
              <img src="/icons/Configuracion.svg" alt="" />
            </Link>
          </Router_User>
        )}
      </AnimatePresence>
    </>
  );
};

export default UsuarioLogin;
