import styled from "styled-components";

const Box = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  p {
    font-size: 16px;
  }
`;
const TextArea = styled.textarea`
  resize: none;
  background-color: var(--Principal);



  padding: 5px 10px;
  min-height: 30px;
  overflow: hidden;
  transition: height 0.2s;
  border: 1px solid transparent;
  border-radius: 1px;
  :focus {
    border-color: var(--Secundario);
  }
`;

const CualEsLaHistoria = ({ value, setValue }) => {
  const onChangeTextArea = (event) => {
    setValue(event.target.value);

    // Se expande automaticamente el Text Area
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <>
      <Box>
        <p>Historia</p>
        <TextArea
          name=""
          id=""
          cols="1"
          rows="1"
          value={value}
          onChange={onChangeTextArea}
          required
        ></TextArea>
      </Box>
    </>
  );
};

export default CualEsLaHistoria;
