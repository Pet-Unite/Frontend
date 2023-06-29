import styled from "styled-components";

const Box = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
  gap: 10px 15px;
  background-color: var(--Principal);
  border-radius: 5px;
  padding: 10px 15px;
`;
const Box_Usuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;
const Imagen = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff54;
  border-radius: 50%;
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

const Getcomentario = () => {
  return (
    <>
      <Box>
        <Box_Usuario>
          <Imagen>
            <img src="/icons/UsuarioDefault.svg" alt="" draggable={false} />
          </Imagen>

          <b>Nuvato!</b>
        </Box_Usuario>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
          repellendus reprehenderit itaque minus veniam tenetur vel, ut laborum
          nihil natus? Odit aliquam facere consequuntur laboriosam harum eveniet
          officiis ducimus. Eos.
        </p>
      </Box>
    </>
  );
};

export default Getcomentario;
