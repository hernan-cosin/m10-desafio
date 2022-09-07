import { Body, LargeText } from "ui/typography"
import Link from "next/link"
import { FooterContainer, FooterContent } from "./styled"
import { Instagram } from "ui/icons"
import styled from "styled-components"

const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 10px 0 0 0;
`

const FooterSocial = styled.div`
    margin: 10px 0 0 0;
    
    @media (min-width: 600px) {
        justify-self: flex-end;
    }
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
`

export function Footer() {
    return <FooterContainer>
        <FooterContent>
            <FooterMenu>
                <Link href="/signin">
                    <Body color="white" as="a" link>Ingresar</Body>
                </Link>
                <Link href="/profile">
                    <Body color="white" as="a" link>Mi perfil</Body>
                </Link>
                <Link href="/search">
                    <Body color="white" as="a" link>Buscar</Body>
                </Link>
                <Link href="/logout">
                    <Body color="white" as="a" link>Logout</Body>
                </Link>
            </FooterMenu>
            <FooterSocial>
                <LargeText color="white" className="social-footer">Redes</LargeText>
                <SocialContainer>
                    <Instagram/>
                        <Body color="white" as="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" link>Instagram</Body>
                </SocialContainer>
            </FooterSocial>
            <Body color="white" className={"footer-copyright"}>@2022 apx</Body>
        </FooterContent>    
    </FooterContainer>
}