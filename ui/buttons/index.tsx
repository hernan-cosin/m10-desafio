import styled from "styled-components"

interface ButtonProps {
    backgroundColor: string;
    color?: string;
    className?: string
}

export const Button = styled("button")<ButtonProps>`
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    max-width: 230px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    background-color:${props => "var(--button-" + props.backgroundColor + ")"};
    color: ${props =>  props.backgroundColor == "blue"? "var(--white)" : "black"};
    cursor: pointer;

    &.search-button {
       display: block;
       margin: 15px auto 0 auto;
    }

    @media (max-width: 599px) {
        &.header-menu {
            display: none;
        }
    }
    
    @media (min-width: 600px) {
        &.header-menu {
            display: block;
        }
    }

    &.signin-email-form {
        margin: 20px 0 0 0;
    }

`