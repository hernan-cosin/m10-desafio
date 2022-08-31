import styled from "styled-components"

export const WelcomeContainer = styled.section`
    background-color: var(--white);
    padding: 35px 0 70px 0;
    min-height: 45vh;
    `

export const WelcomeContent = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
`

export const FeaturedContainer = styled.section`
    background-color: var(--yellow);
    padding: 35px 0 70px 0;
    `

export const FeaturedContent = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;

    @media (max-width: 599px) {
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 300px;
        row-gap: 30px;
    }
    
    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        row-gap: 30px;
    }
`

