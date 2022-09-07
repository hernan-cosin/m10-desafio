import styled from "styled-components"
import { TextField } from "ui/textfield"
import { Button } from "ui/buttons"

export const ProfileContainer = styled.section`
    min-height: 35vh;
    padding: 50px 5px;
`
export const ProfileContent = styled.div`
    max-width: 900px;
    margin: 0 auto;
`

export const ProfileFormContainer = styled.form`
  width: min-content;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 0 auto;
`

export const ProfileForm = ({userData}:any) =>{
    return <ProfileFormContainer>
            <TextField label="Nombre" name="name" type="text" defaultValue={userData? userData.name : ""}/>
            <TextField label="Apellido" name="lastname" type="text" defaultValue={userData? userData.lastName : ""}/>
            <TextField label="Calle" name="street" type="text" defaultValue={userData? userData.address.street : ""}/>
            <TextField label="Altura" name="streetNumber" type="number" defaultValue={userData? userData.address.streetNumber : ""}/>
            <TextField label="Dpto/Casa" name="number" type="text" defaultValue={userData? userData.address.number : ""}/>
            <TextField label="Teléfono" name="phone" type="tel" defaultValue={userData? userData.tel : ""}/>
            <Button backgroundColor="blue">Guardar</Button>
    </ProfileFormContainer>
}