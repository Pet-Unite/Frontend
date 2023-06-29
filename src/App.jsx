import { BrowserRouter, Routes, Route } from "react-router-dom";

import InicioPage from "./pages/InicioPage";
import AnimalPage from "./pages/AnimalPage";
import IngresoPage from "./pages/IngresoPage";
import Favoritos from "./pages/FavoritosPage";
import ConfiguracionPage from "./pages/ConfiguracionPage";
import BuscadorSuperior from "./layout/Navegacion/BuscadorSuperior";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <BuscadorSuperior />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/:id" element={<AnimalPage />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/ingresar" element={<IngresoPage />} />
          <Route path="/configuracion" element={<ConfiguracionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
