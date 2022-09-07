import { ProductCard } from "components/productCard";
import { useSearchProduct } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageNumber, Subtitle, LargeText } from "ui/typography";
import {
  SearchContainer,
  SearchContent,
  SearchResultsContainer,
  PagesButtons
} from "./styled";

export function SearchPage() {
  const router = useRouter();
  const [pagination, setPagination] = useState({} as any)
  const [numberPages, setNumberPages] = useState(null as any)

  const productsResults = useSearchProduct(router.query)
  console.log(productsResults);

  useEffect(()=>{
    setPagination(productsResults?.pagination)

    // console.log("PAGINATION",pagination)
  }, [productsResults])
  
  useEffect(()=>{
    let arr = []

    // console.log("PAGINATION", pagination)

  //   console.log("NBPAGES", pagination.ngPages)
  
    for (let index = 0; index < pagination?.nbPages; index++) {
      // const element = array[index];
      arr.push(index)
    }
    setNumberPages(arr)
    console.log(arr)
  }, [pagination])
  
  // const queryLimit = router.query.limit ? router.query.limit : 0;
  // let [limit, setLimit] = useState(0)
  // const queryOffset = router.query.offset ? router.query.offset : 0;
  // let [offSet, setOffset] = useState(0)
  // const [productsResults, setProductsResults] = useState<{}[]>([]);
  // const [pagination, setPagination] = useState({} as any);

  // useEffect(() => {
  //   console.log("USEEFFECT Q");
    
  //     searchProducts(q as string).then((products) => {
  //       console.log(products);
  //         // setProductsResults((current) => [...current, ...products.results]);
  //         setProductsResults(products.results)
  //         setPagination(products.pagination);
  //     });
  // }, [q]);

  // useEffect(()=>{
  //   // parseInt(queryOffset as string)
  //   setOffset(parseInt(queryOffset as string))
  // }, [queryOffset])

  // useEffect(()=>{
    
  //   setLimit(parseInt(queryLimit as string))
  // }, [queryLimit])

  // useEffect(() => {
  //     searchProducts(
  //       q as string,
  //       limit,
  //       offSet 
  //     ).then((products) => {
  //       console.log(products);
  //         // setProductsResults((current) => [...current, ...products.results]);
  //         setProductsResults(products.results)
  //         setPagination(products.pagination);
  //     });
  // }, [q, limit, offSet]);

  // useEffect(() => {
  //   console.log("PRODUCTS_RESULTS", productsResults);
  //   console.log("PAGINATION", pagination);
  // }, [pagination, productsResults]);

  function handleMoreResultsClick(e:any) {
    e.preventDefault()
    // const newOffset = offSet ++
    // setOffset(offSet++)
    // setLimit(5)
    // const newLimit = limit + 5
    // router.push("http://localhost:3000/search?q=" + q + "&limit=" + newLimit + "&offset=" + newOffset)

    // router.push("http://localhost:3000/search?q=" + q + "&limit=" + newLimit + "&offset=" + newOffset)
  }

  return (
    <SearchContainer>
      <SearchContent>
        <LargeText className="search-subtitle">{"Mostrando " + pagination?.inPage + " de " + pagination?.total}</LargeText>
        <SearchResultsContainer>
          {productsResults?.results.map((p: any) => {
            return (
              <ProductCard
                key={p.objectID}
                title={p.Title}
                price={p.Price}
                imgUrl={p.Attachments[0].url}
                objectID={p.objectID}
              />
            );
          })}
        </SearchResultsContainer>
{/* 
          <Button
            onClick={handleMoreResultsClick}
            className="search-see-more"
            backgroundColor="yellow"
          >
            Ver más
          </Button> */}
          {/* {numberPages} */}
          <PagesButtons>
            {numberPages?.map((p:any)=>{
              return <PageNumber className="pageBullet" color={router.query.page == p? "var(--red)" : "var(--black)"} onClick={(e:any)=>{
                const q = router.query.q
                const hitsPerPage = router.query.hitsPerPage
                if (router.query.page == p) {
                  return 
                } else {
                  router.push("http://127.0.0.1:3000/search?q=" + q + "&page=" + p + "&hitsPerPage=" + hitsPerPage)
                }
              }} key={p}>{p}</PageNumber>
              })}
          </PagesButtons>
      </SearchContent>
    </SearchContainer>
  );
}

