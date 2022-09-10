import Link from "next/link";
import { Instagram } from "ui/icons";
import { Body, LargeText } from "ui/typography";
import {
  FooterContainer,
  FooterContent,
  FooterMenu,
  FooterSocial,
  SocialContainer
} from "./styled";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMenu>
          <Link href="/signin">
            <Body color="white" as="a" link>
              Ingresar
            </Body>
          </Link>
          <Link href="/profile">
            <Body color="white" as="a" link>
              Mi perfil
            </Body>
          </Link>
          <Link href="/search">
            <Body color="white" as="a" link>
              Buscar
            </Body>
          </Link>
          <Link href="/logout">
            <Body color="white" as="a" link>
              Logout
            </Body>
          </Link>
        </FooterMenu>
        <FooterSocial>
          <LargeText color="white" className="social-footer">
            Redes
          </LargeText>
          <SocialContainer>
            <Instagram />
            <Body
              color="white"
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              link
            >
              Instagram
            </Body>
          </SocialContainer>
        </FooterSocial>
        <Body color="white" className={"footer-copyright"}>
          @2022 apx
        </Body>
      </FooterContent>
    </FooterContainer>
  );
}
