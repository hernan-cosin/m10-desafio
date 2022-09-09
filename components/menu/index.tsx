import { useMe } from "lib/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "ui/buttons";
import { MenuCloseIcon, MenuOpenIcon } from "ui/icons";
import { Li, Nav } from "ui/tags";
import { Body, BodyButton, LargeText, Subtitle } from "ui/typography";
import {
  MenuCloseContainer,
  MenuUl,
  UserDataContainerClose,
  UserDataContainerOpen,
} from "./styled";

const MenuOpen = ({ onClick }: any) => {
  const userData = useMe();

  const router = useRouter();

  function handleDesktopSignin() {
    router.push("/signin");
  }

  function handleLogout() {
    router.push("/logout");
  }

  function handleUserClick() {
    router.push("/profile");
  }

  return (
    <Nav>
      <MenuOpenIcon onClick={onClick} />
      {userData?.email ? (
        <UserDataContainerOpen>
          <Body onClick={handleUserClick} color="white" link>
            {userData.email}
          </Body>
          <BodyButton color="var(--red)" onClick={handleLogout} link>
            Cerrar sesión
          </BodyButton>
        </UserDataContainerOpen>
      ) : (
        <Button
          backgroundColor="yellow"
          className="header-menu"
          onClick={handleDesktopSignin}
        >
          Ingresar
        </Button>
      )}
    </Nav>
  );
};

const MenuClose = ({ onClick }: any) => {
  const userData = useMe();
  
  const router = useRouter();

  function handleLogout() {
    router.push("/logout");
  }

  return (
    <MenuCloseContainer>
      <MenuCloseIcon onClick={onClick} className="mobile"></MenuCloseIcon>
      <MenuUl>
        <Li>
          <Link href={"/signin"}>
            <a style={{ textDecoration: "none" }}>
              <Subtitle color="white" link>
                Ingresar
              </Subtitle>
            </a>
          </Link>
        </Li>
        <Li>
          <Link href={"/profile"}>
            <a style={{ textDecoration: "none" }}>
              <Subtitle color="white" link>
                Mi Perfil
              </Subtitle>
            </a>
          </Link>
        </Li>
        <Li>
          <Link href={"/search"}>
            <a style={{ textDecoration: "none" }}>
              <Subtitle color="white" link>
                Buscar
              </Subtitle>
            </a>
          </Link>
        </Li>
      </MenuUl>
      {userData?.email ? (
        <UserDataContainerClose>
          <LargeText color="white">{userData.email}</LargeText>
          <Body color="var(--red)" onClick={handleLogout} link>
            Cerrar sesión
          </Body>
        </UserDataContainerClose>
      ) : (
        ""
      )}
    </MenuCloseContainer>
  );
};

export function Menu() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }

  return toggle ? (
    <MenuOpen onClick={handleToggle} />
  ) : (
    <MenuClose onClick={handleToggle} />
  );
}
