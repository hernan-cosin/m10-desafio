import { updateUserInfo } from "lib/api";
import styled from "styled-components";
import { Button } from "ui/buttons";
import { TextField } from "ui/textfield";

export const ProfileContainer = styled.section`
  min-height: 35vh;
  padding: 50px 5px;
`;
export const ProfileContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media (min-width: 600px) {
  }
`;

export const ProfileFormContainer = styled.form`
  width: min-content;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 0 auto;
`;

export const ProfileForm = ({ userData }: any) => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const { name } = e.target;
    const { lastname } = e.target;
    const { street } = e.target;
    const { streetNumber } = e.target;
    const { number } = e.target;
    const { phone } = e.target;

    const data = {
      name: name.value ? name.value : "",
      lastName: lastname.value ? lastname.value : "",
      street: street.value ? street.value : "",
      streetNumber: streetNumber.value ? streetNumber.value : "",
      number: number.value ? number.value : "",
      tel: phone.value ? phone.value : "",
    };

    const res = await updateUserInfo(data);
  }

  return (
    <ProfileFormContainer onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        name="name"
        type="text"
        defaultValue={userData ? userData.name : ""}
      />
      <TextField
        label="Apellido"
        name="lastname"
        type="text"
        defaultValue={userData ? userData.lastName : ""}
      />
      <TextField
        label="Calle"
        name="street"
        type="text"
        defaultValue={userData ? userData?.street : ""}
      />
      <TextField
        label="Altura"
        name="streetNumber"
        type="number"
        defaultValue={userData ? userData?.streetNumber : ""}
      />
      <TextField
        label="Dpto/Casa"
        name="number"
        type="text"
        defaultValue={userData ? userData?.number : ""}
      />
      <TextField
        label="Teléfono"
        name="phone"
        type="tel"
        defaultValue={userData ? userData.tel : ""}
      />
      <Button backgroundColor="blue">Guardar</Button>
    </ProfileFormContainer>
  );
};
