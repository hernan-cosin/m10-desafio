import { ProductCard } from "components/productCard";
import { useFeaturedProducts } from "lib/hooks";
import { Button } from "ui/buttons";
import { Input } from "ui/textfield";
import { Title } from "ui/typography";
import {
  FeaturedContainer,
  FeaturedContent, WelcomeContainer,
  WelcomeContent, HomeSearchForm
} from "./styled";
import { useRouter } from "next/router"

export function HomePage() {
  const featuredProducts = useFeaturedProducts()
  const router = useRouter()

  function handleHomeSearchSubmit(e:any) {
    e.preventDefault()
    const q = e.target["home-search-input"].value

    router.push("/search?q=" + q + "&page=0&hitsPerPage=5")
  }

  return (
    <>
      <WelcomeContainer>
        <WelcomeContent>
          <Title className={"homepage-title"}>El mejor e-commerce</Title>
          <HomeSearchForm onSubmit={handleHomeSearchSubmit}>
            <Input className={"header-input"} name="home-search-input" placeholder="Milanesas" />
            <Button backgroundColor="blue" className="search-button">
            Buscar
            </Button>
          </HomeSearchForm>
        </WelcomeContent>
      </WelcomeContainer>
      <FeaturedContainer>
        <Title className={"homepage-featured-title"}>Productos destacados</Title>
        <FeaturedContent>
          {featuredProducts?.map((p: any) => {
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
        </FeaturedContent>
      </FeaturedContainer>
    </>
  );
}
