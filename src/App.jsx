import { BrowserRouter, Routes, Route } from "react-router-dom";

import InicioPage from "./pages/InicioPage";
import AnimalPage from "./pages/AnimalPage";
import IngresoPage from "./pages/IngresoPage";
import Favoritos from "./pages/FavoritosPage";
import ConfiguracionPage from "./pages/ConfiguracionPage";
import BuscadorSuperior from "./layout/Navegacion/BuscadorSuperior";
import RegistrarsePage from "./pages/RegistrarsePage";
import AgregarMascotaPage from "./pages/AgregarMascotaPage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <BuscadorSuperior />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/mascotas/:id" element={<AnimalPage />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/configuracion" element={<ConfiguracionPage />} />
          <Route path="/ingresar" element={<IngresoPage />} />
          <Route path="/registrarse" element={<RegistrarsePage />} />
          <Route path="/agregar-mascota" element={<AgregarMascotaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
