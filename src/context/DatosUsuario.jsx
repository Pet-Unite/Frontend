import { createContext, useState } from "react";

const UsuarioLoginContext = createContext();

const UsuarioLoginProvider = ({ children }) => {
  const [imagenUsuario, setImagenUsuario] = useState("/");
  const [correoUsuario, setCorreoUsuario] = useState("example@example.com");
  const [nombreUsuario, setNombreUsuario] = useState("example");

  const value = {
    imagenUsuario,
    correoUsuario,
    nombreUsuario,
    setImagenUsuario,
    setCorreoUsuario,
    setNombreUsuario,
  };

  return (
    <UsuarioLoginContext.Provider value={value}>
      {children}
    </UsuarioLoginContext.Provider>
  );
};

export { UsuarioLoginContext, UsuarioLoginProvider };
