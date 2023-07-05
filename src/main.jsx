import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NombreDelAnimalProvider } from "./context/BuscarPorNombre.jsx";
import { UsuarioLoginProvider } from "./context/DatosUsuario.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsuarioLoginProvider>
      <NombreDelAnimalProvider>
        <App />
      </NombreDelAnimalProvider>
    </UsuarioLoginProvider>
  </React.StrictMode>
);
