import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Tarjeta from "./Tarjeta";
import { NombreDelAnimalContext } from "../../context/BuscarPorNombre";

const Main = styled.ul`
  width: 100%;
  margin: auto;
  display: grid;
  gap: 30px 25px;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const MapDeTarjetas = ({ valueRadio }) => {
  const { buscarPorNombre } = useContext(NombreDelAnimalContext);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(valueRadio)
      .then((response) => {
        setGetData(response.data);
      })
      .catch(() => {});
  }, [valueRadio]);

  const nombreBuscado = buscarPorNombre.toLowerCase(); // Obtener el nombre a buscar en minúsculas

  const resultadosFiltrados = getData.filter((data) => {
    const razaLowerCase = data.raza.toLowerCase(); // Convertir la raza a minúsculas
    console.log(nombreBuscado)
    return razaLowerCase.includes(nombreBuscado);
  });
  

  return (
    <>
      <Main>
        {resultadosFiltrados.map((item, key) => (
          <li key={key}>
            <Tarjeta
              raza={item.raza}
              src={item.src}
              like={item.like}
              id={item._id}
            />
          </li>
        ))}
      </Main>
    </>
  );
};

export default MapDeTarjetas;
