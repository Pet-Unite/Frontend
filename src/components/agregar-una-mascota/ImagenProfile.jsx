import styled from "styled-components";

const Imagen = styled.label`
  width: 250px;
  height: 250px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  border: 1px solid grey;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 5px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const Input = styled.input`
 position: absolute;
 opacity: 0;
 pointer-events: none;
`;

const ImagenProfile = ({ value, setValue }) => {
  const onChangeImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Imagen htmlFor="Src">
        <Input id="Src" type="file" accept="image/*" onChange={onChangeImagen} />
        <img src={value} />
      </Imagen>
    </>
  );
};

export default ImagenProfile;
