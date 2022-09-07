import styled from "styled-components"
import { TextField } from "ui/textfield"
import { Button } from "ui/buttons"

export const SearchContainer = styled.section`
    min-height: 35vh;
    padding: 50px 5px;
`
export const SearchContent = styled.div`
    max-width: 900px;
    margin: 0 auto;
`

export const SearchResultsContainer = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    margin: 0 0 25px 0;
    
    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        column-gap: 10px;
        margin: 45px auto 20px auto;
    }
`
export const PagesButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
    max-width: 300px;
    margin: 0 auto;
`