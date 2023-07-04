import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
  margin-top: auto;
`;

const Boton = ({ onClick, Texto }) => {
  return (
    <>
      <Btn type="submit" onClick={onClick}>
        <p> {Texto}</p>
      </Btn>
    </>
  );
};

export default Boton;
