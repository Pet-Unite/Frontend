import { useState } from "react";
import styled from "styled-components";

const Box = styled.form`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  margin: auto;
  gap: 0 15px;
`;

const Imagen = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff54;

  border-radius: 50%;
  margin: 0 auto auto auto;
  position: relative;
  img {
    position: absolute;
    left: 1px;
    height: 100%;
    width: 100%;
    padding: 12px;
    object-fit: cover;
    border-radius: 50%;
    user-select: none;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  border-bottom: 2px solid var(--Principal-Cromatico);
  width: 100%;
  margin: auto;
  padding: 0.5rem;
  min-height: 20px;
  overflow: hidden;
  transition: height 0.2s;
  background-color: transparent;

  :focus {
    border-color: var(--Secundario);
  }
`;
const Button = styled.button`
  margin: auto auto 20px auto;

  border: 1px solid var(--Secundario);
  padding: 5px 10px;
  border-radius: 3px;
`;

const Postcomentario = () => {
  const [texto, setTexto] = useState("");

  const onChangeTextArea = (event) => {
    setTexto(event.target.value);

    // Se expande automaticamente el Text Area
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <>
      <Box>
        <Imagen>
          <img src="/icons/UsuarioDefault.svg" alt="" draggable={false} />
        </Imagen>
        <TextArea
          name=""
          id=""
          cols="1"
          rows="1"
          value={texto}
          onChange={onChangeTextArea}
          required
        ></TextArea>

        {false && <Button type="submit">Comentar</Button>}
      </Box>
    </>
  );
};

export default Postcomentario;
