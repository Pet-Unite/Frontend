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
    const fetchData = async () => {
      try {
        let urlConID = `http://localhost:8000/mascotas/single/${id.id}`;
        console.log(urlConID);
        const response = await axios.get(urlConID);
        setGetData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(getData);

  return (
    <>
      <Main>
        <TarjetaID data={getData} />
        <Comentarios data={getData} />
      </Main>
    </>
  );
};

export default AnimalPage;
