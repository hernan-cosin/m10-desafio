import styled from "styled-components"

export const FooterContainer = styled.section`
    margin: 0 auto;
    padding: 20px;
    background-color: var(--dark-blue);
`

export const FooterContent = styled.div`
    @media (max-width: 599px) {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        max-width: var(--max-width);
        margin: 0 auto;
    }
    
    @media (min-width: 600px) {
        flex-direction: unset;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: var(--max-width);
        margin: 0 auto;
    }
    `
