import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Boton from "./Boton";
import QueTipoDeMascotaEs from "./QueTipoDeMascotaEs";
import PromedioDeVida from "./PromedioDeVida";
import DeDondeSeOrigino from "./DeDondeSeOrigino";
import TamañoDelAnimal from "./TamañoDelAnimal";
import ImagenProfile from "./ImagenProfile";
import NombreDelAnimal from "./NombreDelAnimal";
import CualEsLaHistoria from "./CualEsLaHistoria";

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: auto;
`;
const General = styled.div`
  display: flex;
  gap: 20px;
`;
const Data = styled.div`
  display: flex;
  padding: 20px 0;
`;
const Informacion_General = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 350px;
`;

const PostMascota = () => {
  const [nombre, setNombre] = useState("");
  const [src, setSrc] = useState("");
  const [tipo, setTipo] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [longevidad, setLongevidad] = useState("");
  const [origen, setOrigen] = useState("");
  const [historia, setHistoria] = useState("");

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeTipo = (e) => setTipo(e.target.value);
  const onChangeTamaño = (e) => setTamaño(e.target.value);
  const onChangeOrigen = (e) => setOrigen(e.target.value);

  // Axios
  const AgregarMascota = async (e) => {
    e.preventDefault();
    const mascota = {
      raza: nombre,
      tipo: tipo,
      tamaño: tamaño,
      longevidad: longevidad,
      origen: origen,
      historia: historia,
      src: src,
    };

    try {
      const response = axios.post("http://localhost:8000/mascotas/", mascota);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={AgregarMascota}>
        <General>
          <NombreDelAnimal value={nombre} onChange={onChangeNombre} />
          <QueTipoDeMascotaEs value={tipo} onChange={onChangeTipo} />
        </General>
        <Data>
          <Informacion_General>
            <ImagenProfile value={src} setValue={setSrc} />
            <TamañoDelAnimal value={tamaño} onChange={onChangeTamaño} />
            <PromedioDeVida setValue={setLongevidad} />
            <DeDondeSeOrigino value={origen} onChange={onChangeOrigen} />
          </Informacion_General>

          <CualEsLaHistoria value={historia} setValue={setHistoria} />
        </Data>

        <Boton Texto="Agregar mascota" />
      </Form>
    </>
  );
};

export default PostMascota;
