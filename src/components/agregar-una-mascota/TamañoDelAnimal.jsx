import styled from "styled-components";

const Main = styled.div`
  p {
    font-size: 16px;
  }
`;
const Select = styled.select`
  display: flex;
  width: max-content;

  padding: 5px 10px;
  background-color: var(--Principal);
  color: ${(props) => (props.styledColor === undefined ? "grey" : "#ddd")};
`;
const Option = styled.option`
  color: white;
`;

const TamañoDelAnimal = ({ value, onChange }) => {
  return (
    <>
      <Main>
        <p>¿Cual es su tamaño?</p>
        <Select
          name=""
          id=""
          onChange={onChange}
          value={value}
          required
          styledColor={value}
        >
          <option value="" hidden>Seleccionar</option>
          <Option value="Pequeño">Pequeño</Option>
          <Option value="Mediano">Mediano</Option>
          <Option value="Grande">Grande</Option>
        </Select>
      </Main>
    </>
  );
};

export default TamañoDelAnimal;
