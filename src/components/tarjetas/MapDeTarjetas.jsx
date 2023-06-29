import { useContext } from "react";
import styled from "styled-components";

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
const MapDeTarjetas = () => {
  const { buscarPorNombre } = useContext(NombreDelAnimalContext);

  const Mascotas = [
    {
      id: "",
      raza: "",
      src: "/pajaros/",
      longevidad: "",
      origen: "",
      tamaño: "",
      historia: "",
      like: 0,
    },
  ];

  const filtroDeMascotas = Mascotas.filter((item) =>
    item.raza.toLowerCase().startsWith(buscarPorNombre.toLowerCase())
  );

  console.log(buscarPorNombre);

  return (
    <>
      <Main>
        {filtroDeMascotas.map((item, key) => (
          <li key={key}>
            <Tarjeta raza={item.raza} src={item.src} like={item.like} />
          </li>
        ))}
      </Main>
    </>
  );
};

export default MapDeTarjetas;
