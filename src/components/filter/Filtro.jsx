import { useContext } from "react";

import InputBuscar from "../../utils/InputBuscar";
import { NombreDelAnimalContext } from "../../context/BuscarPorNombre";

const Filtro = () => {
  const { buscarPorNombre, onChangeBuscarPorNombre } = useContext(
    NombreDelAnimalContext
  );

  return (
    <>
      <InputBuscar value={buscarPorNombre} onChange={onChangeBuscarPorNombre} />
    </>
  );
};

export default Filtro;
