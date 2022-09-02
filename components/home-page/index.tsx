import { ProductCard } from "components/card";
import { useFeaturedProducts } from "lib/hooks";
import { Button } from "ui/buttons";
import { Input } from "ui/textfield";
import { Title } from "ui/typography";
import {
  FeaturedContainer,
  FeaturedContent, WelcomeContainer,
  WelcomeContent
} from "./styled";

export function HomePage() {
  const featuredProducts = useFeaturedProducts()

  return (
    <>
      <WelcomeContainer>
        <WelcomeContent>
          <Title className={"homepage-title"}>El mejor e-commerce</Title>
          <Input className={"input"} placeholder="Milanesas" />
          <Button backgroundColor="blue" className="search-button">
            Buscar
          </Button>
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
