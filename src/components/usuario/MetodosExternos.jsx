import styled from "styled-components";

const Box = styled.div`
  display: flex;
  margin: auto auto 0 auto;
  gap: 25px;
  justify-content: center;
  width: 80%;
  border-top: 1px solid var(--Principal-Cromatico);
  padding: 25px 0%;
`;
const MetodosExternos = ({ onClickGoogle, onClickDiscord }) => {
  return (
    <>
      <Box>
        <button className="GoogleBtn" type="button" onClick={onClickGoogle}>
          Google
        </button>
        <button className="DiscordBtn" type="button" onClick={onClickDiscord}>
          Discord
        </button>
      </Box>
    </>
  );
};

export default MetodosExternos;
