"use client";

import { createContext, useState } from "react";

const NombreDelAnimalContext = createContext();

const NombreDelAnimalProvider = ({ children }) => {
  const [buscarPorNombre, setBuscarPorNombre] = useState("");

  const onChangeBuscarPorNombre = (e) => setBuscarPorNombre(e.target.value);

  const value = {
    buscarPorNombre,
    setBuscarPorNombre,
    onChangeBuscarPorNombre,
  };

  return (
    <NombreDelAnimalContext.Provider value={value}>
      {children}
    </NombreDelAnimalContext.Provider>
  );
};

export { NombreDelAnimalContext, NombreDelAnimalProvider };
