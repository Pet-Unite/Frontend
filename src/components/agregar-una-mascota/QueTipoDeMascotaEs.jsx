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
  color: ${(props) => (props.styledColor === "" ? "grey" : "#ddd")};
`;
const Option = styled.option`
  color: white;
`;

const QueTipoDeMascotaEs = ({ value, onChange }) => {
  return (
    <>
      <Main>
        <p>¿Que tipo de animal es?</p>
        <Select
          name=""
          id=""
          onChange={onChange}
          value={value}
          required
          styledColor={value}
        >
          <option value="" hidden>Seleccionar</option>
          <Option value="perro">Perro</Option>
          <Option value="gato">Gato</Option>
          <Option value="roedor">Roedor</Option>
          <Option value="pajaro">Pajaro</Option>
        </Select>
      </Main>
    </>
  );
};

export default QueTipoDeMascotaEs;
