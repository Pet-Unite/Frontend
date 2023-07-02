import styled from "styled-components";

import Texto from "../Texto";
import Contraseña from "../Contraseña";
import MetodosExternos from "../MetodosExternos";
import Check from "../Check";
import Boton from "../Boton";
import Walpapper from "../Walpapper";

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 550px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #151515;
  margin: 65px auto;
`;

const Form = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Form_Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  gap: 30px 0;
  height: 100%;
`;
const Registrarse = () => {
  const onSubmitIniciarSesion = (e) => e.preventDefault();

  return (
    <>
      <Box>
        <Walpapper
          src="/Register.jpg"
          h2="¡Únete a nuestra comunidad!"
          texto="¿Tienes dudas sobre tu mascota? ¡Encuentra información y resuelve tus inquietudes junto a nuestra increíble comunidad de amantes de las mascotas!"
          href="/ingresar"
          textoLink="¿Ya tienes una cuenta? "
          textoA="¡Ingresa!"
        />
        <Form onSubmit={onSubmitIniciarSesion}>
          <Form_Box>
            <h1>Crear cuenta</h1>
            <Texto
              htmlFor="Email"
              placeHolder="example@example.com"
              value=""
              onChange=""
            />
            <Contraseña
              htmlFor="Contraseña"
              placeHolder="● ● ● ● ● ● ● ●"
              value=""
              onChange=""
            />
            <Contraseña
              htmlFor="Contraseña"
              placeHolder="● ● ● ● ● ● ● ●"
              value=""
              onChange=""
            />

            <Check>Terminos y condiciones</Check>
            <Boton Texto="Registrarse" />
          </Form_Box>
          <MetodosExternos />
        </Form>
      </Box>
    </>
  );
};

export default Registrarse;
