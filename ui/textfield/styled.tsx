import styled from "styled-components"
import {Tiny} from "ui/typography"

export const Input = styled.input.attrs(props=>({
    type: props.type,
    className: props.className
}))`
    min-width: 230px;
    height: 40px;
    border: 2px solid var(--black);
    border-radius: 4px;
    padding: 0 0 0 10px;
    
    &.header-input {
        display: block;
        margin: 25px auto 0 auto;
    }
    
    &.header-searcher {
        border: 2px solid var(--white);
        background-color: var(--blue);
        color: var(--white);
        font-size: 14px;
    }
`

export const Label = styled(Tiny)``