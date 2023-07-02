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
  gap: 40px 0;
  height: 100%;
`;
const Login = () => {
  const onSubmitIniciarSesion = (e) => e.preventDefault();

  return (
    <>
      <Box>

        <Form onSubmit={onSubmitIniciarSesion}>
          <Form_Box>
            <h1>Iniciar Sesion</h1>

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

            <Check>Guardar usuario</Check>
            <Boton Texto="Ingresar" />
          </Form_Box>
          <MetodosExternos />
        </Form>
        <Walpapper
        src='/Login.jpg' 
          h2="¡Bienvenido a nuestra comunidad!"
          texto="¡Explora y comparte tus conocimientos con más personas! Tú eres el pilar de esta comunidad."
          href="/registrarse"
          textoLink="¿Aún no tienes una cuenta?"
          textoA='¡Créate una ahora mismo!'
        />
      </Box>
    </>
  );
};

export default Login;
