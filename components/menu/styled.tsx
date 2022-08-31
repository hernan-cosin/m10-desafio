
import { Li, Nav, Ul } from "ui/tags";
import styled from "styled-components"

export const MenuCloseContainer = styled(Nav)`
  @media (max-width: 599px) {
    background-color: var(--dark-blue);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const MenuUl = styled(Ul)`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 70px;
`;

export const UserDataContainerOpen = styled.div`
    display: flex;
    flex-direction: column;
    align-Items: center;
    
    @media (max-width: 599px) {
        display: none;
    }
`

export const UserDataContainerClose = styled.div`
    display: flex;
    flex-direction: column;
    align-Items: center;
`