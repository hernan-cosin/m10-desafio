import styled from "styled-components"
import MenuSvg from "./menu/menu.svg"
import MenuCloseSvg from "./menu-close/x.svg"
import instagramSvg from "./instagram/instagram.svg"

export const MenuOpenIcon = styled(MenuSvg)`
    width: 38px;
    height: 38px;
    color: var(--yellow);
    cursor: pointer;

    @media (min-width: 600px) {
        display: none;
    }
    `

export const MenuCloseIcon = styled(MenuCloseSvg)`
    width: 38px;
    height: 38px;
    color: var(--yellow);
    cursor: pointer;

    &.mobile {
        align-self: flex-end;
        margin: 0 10px 0 0;
        position: absolute;
        top: 22.5px;
    }
`

export const Instagram = styled(instagramSvg)`
    width: 18px;
    height: 18px;
`