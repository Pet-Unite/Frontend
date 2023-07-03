import { useState } from "react";
import styled from "styled-components";

const Box = styled.form`
  display: flex;
  width: 100%;
  max-width: 750px;
  margin: auto;
  gap: 0 15px;
`;

const Imagen = styled.div`
  display: flex;
  min-height: 60px;
  min-width: 60px;
  max-width: 60px;
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
  background-color: var(--Principal-Cromatico);
  width: 100%;
  max-width: 650px;
  margin: auto;
  padding: 0.5rem;
  min-height: 20px;
  overflow: hidden;
  transition: height 0.2s;
  border: 1px solid transparent;
  border-radius: 1px;
  :focus {
    border-color: var(--Secundario);
  }
`;
const Box_Text_Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: max-content;
  margin-top: 11.5px;
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: auto;
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
        <Box_Text_Btn>
          <TextArea
            name=""
            id=""
            cols="1"
            rows="1"
            value={texto}
            onChange={onChangeTextArea}
            required
          ></TextArea>

          {true && <Button type="submit">Comentar</Button>}
        </Box_Text_Btn>
      </Box>
    </>
  );
};

export default Postcomentario;
