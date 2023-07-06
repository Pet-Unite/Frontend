import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeCorreo = (e) => setCorreo(e.target.value);
  const onChangeContraseña = (e) => setContraseña(e.target.value);

  const onSubmitCrearCuenta = (e) => {
    e.preventDefault();

    // Configurar los datos a enviar en el cuerpo de la solicitud
    const data = {
      correo: correo,
      contra: contraseña,
    };

    // Realizar la solicitud POST con Axios
    axios
      .post("http://localhost:8000/api/user/user/register", data)
      .then((response) => {
        // Aquí puedes manejar la respuesta exitosa si el servidor devuelve algo
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud o respuestas de error del servidor
        console.error("Error al hacer la solicitud:", error);
      });
  };

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
        <Form onSubmit={onSubmitCrearCuenta}>
          <Form_Box>
            <h1>Crear cuenta</h1>
            <Texto
              htmlFor="Nombre de usuario"
              placeHolder="Nuvato"
              value={nombre}
              onChange={onChangeNombre}
            />
            <Texto
              htmlFor="Email"
              placeHolder="example@example.com"
              value={correo}
              onChange={onChangeCorreo}
            />
            <Contraseña
              htmlFor="Contraseña"
              placeHolder="● ● ● ● ● ● ● ●"
              value={contraseña}
              onChange={onChangeContraseña}
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
