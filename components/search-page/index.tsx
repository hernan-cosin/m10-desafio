import { ProductCard } from "components/productCard";
import { useSearchProduct } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LargeText, PageNumber } from "ui/typography";
import {
  PagesButtons, SearchContainer,
  SearchContent,
  SearchResultsContainer
} from "./styled";

export function SearchPage() {
  const router = useRouter();
  const [pagination, setPagination] = useState({} as any);
  const [numberPages, setNumberPages] = useState(null as any);

  const productsResults = useSearchProduct(router.query);

  useEffect(() => {
    setPagination(productsResults?.pagination);
  }, [productsResults]);

  useEffect(() => {
    let arr = [];

    for (let index = 0; index < pagination?.nbPages; index++) {
      arr.push(index);
    }
    setNumberPages(arr);
  }, [pagination]);

  return (
    <SearchContainer>
      <SearchContent>
        {router.query.q ? (
          <LargeText className="search-subtitle">
            {"Mostrando " + pagination?.inPage + " de " + pagination?.total}
          </LargeText>
        ) : (
          <>
            <LargeText className="search-subtitle">
              Nada para mostar por ahora. . .
            </LargeText>
            <LargeText className="search-subtitle">
              Busca productos en la barra buscadora.
            </LargeText>
          </>
        )}
        <SearchResultsContainer>
          {productsResults?.results.map((p: any) => {
            return (
              <ProductCard
                key={p.objectID}
                title={p.Title}
                price={p.Price}
                imgUrl={p.Attachments[0].url}
                objectID={p.objectID}
                stock={p.Stock}
              />
            );
          })}
        </SearchResultsContainer>
        <PagesButtons>
          {numberPages?.map((p: any) => {
            return (
              <PageNumber
                className="pageBullet"
                color={router.query.page == p ? "var(--red)" : "var(--black)"}
                onClick={(e: any) => {
                  const q = router.query.q;
                  const hitsPerPage = router.query.hitsPerPage;
                  if (router.query.page == p) {
                    return;
                  } else {
                    router.push(
                      "https://m10-desafio.vercel.app/search?q=" +
                        q +
                        "&page=" +
                        p +
                        "&hitsPerPage=" +
                        hitsPerPage
                    );
                  }
                }}
                key={p}
              >
                {p}
              </PageNumber>
            );
          })}
        </PagesButtons>
      </SearchContent>
    </SearchContainer>
  );
}
