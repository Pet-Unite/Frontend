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
  height: 270px;
  aspect-ratio: 10/9;
  border-radius: 5px;
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
const TarjetaID = ({data}) => {
  const [toggleCorazon, setToggleCorazon] = useState(false);

  const corazonActivo = () => setToggleCorazon(true);
  const corazonInactivo = () => setToggleCorazon(false);

  return (
    <>
        <Main>
          <Box>
            <Nombre>{data.raza}</Nombre>
            <Imagen>
              <img src={data.src} alt="Animal" />
            </Imagen>
            <DivMegusta>
              <p>{data.like}</p>
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
                <p>{data.longevidad}</p>
              </Data>
              <Data>
                <b>Tamaño</b>
                <p>{data.tamaño}</p>
              </Data>
              <Data>
                <b>Origen</b>
                <p>{data.origen} </p>
              </Data>
            </Data_Box>
          </Box>
          <Historia>
            <p>{data.historia}</p>
          </Historia>
        </Main>
    
    </>
  );
};

export default TarjetaID;
