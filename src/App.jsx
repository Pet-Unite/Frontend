import { BrowserRouter, Routes, Route } from "react-router-dom";

import InicioPage from "./pages/InicioPage";
import AnimalPage from "./pages/AnimalPage";
import IngresoPage from "./pages/IngresoPage";
import Favoritos from "./pages/FavoritosPage";
import ConfiguracionPage from "./pages/ConfiguracionPage";
import Navegacion from "./layout/Navegacion/Navegacion";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Navegacion />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/Panda" element={<AnimalPage />} />
          <Route path="/configuracion" element={<ConfiguracionPage />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/ingresar" element={<IngresoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
