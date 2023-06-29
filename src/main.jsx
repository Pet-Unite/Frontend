import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NombreDelAnimalProvider } from "./context/BuscarPorNombre.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NombreDelAnimalProvider>
      <App />
    </NombreDelAnimalProvider>
  </React.StrictMode>
);
