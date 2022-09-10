import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "ui/buttons";
import { Input } from "ui/textfield/styled";

export const HeaderContainer = styled.section`
  margin: 0 auto;
  padding: 10px;
  background-color: var(--dark-blue);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  place-content: center;
  max-width: var(--max-width);
  min-height: 75px;
  margin: 0 auto;

  @media (max-width: 599px) {
  }
`;
const HeaderSearcherForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: 850px) {
    flex-direction: row;
    column-gap: 5px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SearcherContainer = styled.div`
  @media (min-width: 850px) {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export function HeaderSearcher() {
  const router = useRouter();

  function handleHomeSearchSubmit(e: any) {
    e.preventDefault();
    const q = e.target["header-searcher"].value;

    router.push("/search?q=" + q + "&page=0&hitsPerPage=5");
  }

  return (
    <HeaderSearcherForm onSubmit={handleHomeSearchSubmit}>
      <Input
        className="header-searcher"
        name="header-searcher"
        placeholder="Hamburguesas"
      />
      <Button backgroundColor="white">Buscar</Button>
    </HeaderSearcherForm>
  );
}
