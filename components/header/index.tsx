import { LogoLight } from "ui/logo";
import {
    Content,
    HeaderContainer,
    HeaderSearcher,
    LogoContainer,
    SearcherContainer
} from "./styled";
// import { LogoDark } from "ui/logo"
import { Menu } from "components/menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
  const router = useRouter();

  function handleLogoClick() {
    router.push("/");
  }

  const [home, setHome] = useState(false);

  useEffect(() => {
    router.pathname == "/" ? setHome(true) : setHome(false);
  }, [router.pathname]);

  return (
    <HeaderContainer>
      <Content>
        <LogoContainer>
          <LogoLight onClick={handleLogoClick} />
          {/* <LogoDark/> */}
          <Menu />
        </LogoContainer>
        <SearcherContainer>{home ? "" : <HeaderSearcher />}</SearcherContainer>
      </Content>
    </HeaderContainer>
  );
}
