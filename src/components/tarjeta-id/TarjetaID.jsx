import { useState } from "react";
import styled from "styled-components";

const Main = styled.section`
  display: flex;
  width: 95.7%;
  margin: auto;
  gap: 25px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: var(--Principal);
    bottom: -25px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;
const Nombre = styled.b`
  width: 100%;
  text-align: center;

  padding: 10px 0;
`;
const Imagen = styled.div`
  width: 100%;
  aspect-ratio: 10/9;
  border-radius: 5px;
  border: 1px solid white;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
`;
const Data_Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
`;
const Data = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  p {
  }
`;
const Historia = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
`;
const DivMegusta = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  user-select: none;
  margin-left: auto;
  padding: 5px;
`;
const Icono = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const TarjetaID = () => {
  const [toggleCorazon, setToggleCorazon] = useState(false);

  const corazonActivo = () => setToggleCorazon(true);
  const corazonInactivo = () => setToggleCorazon(false);
  return (
    <>
      <Main>
        <Box>
          <Nombre>Nombre</Nombre>
          <Imagen>
            <img src="2" alt="Animal" />
          </Imagen>
          <DivMegusta>
            <p> 293</p>
            {toggleCorazon ? (
              <Icono onClick={corazonInactivo}>
                <img src="/icons/CorazonActivo.svg" alt="" />
              </Icono>
            ) : (
              <Icono onClick={corazonActivo}>
                <img src="/icons/CorazonInactivo.svg" alt="" />
              </Icono>
            )}
          </DivMegusta>
          <Data_Box>
            <Data>
              <b>Promedio de vida</b>
              <p>10 a 15 años</p>
            </Data>
            <Data>
              <b>Tamaño</b>
              <p>Pequeño</p>
            </Data>
            <Data>
              <b>Origen</b>
              <p>Australia </p>
            </Data>
          </Data_Box>
        </Box>
        <Historia>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            commodi, deleniti corrupti enim modi nisi suscipit id minima laborum
            nostrum omnis possimus nemo culpa pariatur, tenetur perferendis
            dolor blanditiis. Id quasi ipsam corrupti aut saepe natus obcaecati
            vero eius, sequi tempora maiores eveniet dolor officia facere
            reprehenderit mollitia dolore distinctio?
          </p>
        </Historia>
      </Main>
    </>
  );
};

export default TarjetaID;
