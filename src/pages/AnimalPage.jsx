import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TarjetaID from "../components/tarjeta-id/TarjetaID";
import Comentarios from "../components/comentarios/Comentarios";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  gap: 20px;
  padding: 20px 0;
  margin: auto;
`;

const AnimalPage = () => {
  const [getData, setGetData] = useState([]);
  const id = useParams();

  useEffect(() => {
    let urlConID = `http://localhost:8000/mascotas/${id.id}`;
    axios
      .get(urlConID)
      .then((response) => {
        setGetData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <>
      {getData && getData.results && (
        <Main>
          <TarjetaID data={getData.results} />
          <Comentarios data={getData.results} />
        </Main>
      )}
    </>
  );
};

export default AnimalPage;
