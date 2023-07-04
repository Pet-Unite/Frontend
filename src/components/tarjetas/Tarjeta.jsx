import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  margin: auto;
`;
const Imagen = styled.div`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  img {
    border-radius: 5px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px;
`;
const DivMegusta = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  user-select: none;
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

const Tarjeta = ({ raza, src, like, id }) => {
  const navigate = useNavigate();
  const [toggleCorazon, setToggleCorazon] = useState(false);

  const corazonActivo = () => setToggleCorazon(true);
  const corazonInactivo = () => setToggleCorazon(false);

  const redirigirConID = () => navigate(`/mascotas/${id}`);

  return (
    <>
      <Main>
        <Imagen onClick={redirigirConID}>
          <img src={src} alt="" draggable={false} />
        </Imagen>

        <Div>
          <p>{raza}</p>

          <DivMegusta>
            <p> {like}</p>
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
        </Div>
      </Main>
    </>
  );
};

export default Tarjeta;
