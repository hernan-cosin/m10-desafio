import styled from "styled-components"
import { Button } from "ui/buttons"
import { Input } from "ui/textfield"

export const HeaderContainer = styled.section`
    margin: 0 auto;
    padding: 10px;
    background-color: var(--dark-blue);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    place-content: center;
    max-width: var(--max-width);
    min-height: 75px;
    margin: 0 auto;

    @media (max-width: 599px) {

    }
`
const HeaderSearcherForm = styled.form`
    display: flex;
`

export function HeaderSearcher() {
    return <HeaderSearcherForm>
        <Input />
        <Button backgroundColor="yellow">Buscar</Button>
    </HeaderSearcherForm>
}
