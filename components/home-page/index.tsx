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
  console.log(featuredProducts);
  
  // const products = [
  //   {
  //     title:"Milanesas",
  //     price:"600",
  //     imgUrl: "https://dl.airtable.com/.attachments/61d6df543d3c85e40833c02c681278a2/6fce3f91/images?ts=1660828951&userId=usrfJrKJ7sJiJUWX2&cs=d86170803ee37354",
  //   },
  //   {
  //     title:"Hamburguesas",
  //     price:"1200",
  //     imgUrl: "https://dl.airtable.com/.attachments/61d6df543d3c85e40833c02c681278a2/6fce3f91/images?ts=1660828951&userId=usrfJrKJ7sJiJUWX2&cs=d86170803ee37354",
  //   },
  //   {
  //     title:"Milanesas Napolitanas",
  //     price:"1800",
  //     imgUrl: "https://dl.airtable.com/.attachments/61d6df543d3c85e40833c02c681278a2/6fce3f91/images?ts=1660828951&userId=usrfJrKJ7sJiJUWX2&cs=d86170803ee37354",
  //   },
  // ]
  return (
    <>
      <WelcomeContainer>
        <WelcomeContent>
          <Title className={"title"}>El mejor e-commerce</Title>
          <Input className={"input"} placeholder="Milanesas" />
          <Button backgroundColor="blue" className="search-button">
            Buscar
          </Button>
        </WelcomeContent>
      </WelcomeContainer>
      <FeaturedContainer>
          <Title className={"title"}>Productos destacados</Title>
        <FeaturedContent>
          {featuredProducts?.map((p: any)=>{return <ProductCard key={p.objectID} title={p.Title} price={p.Price} imgUrl={p.Attachments[0].url}/>})}
        </FeaturedContent>
      </FeaturedContainer>
    </>
  );
}
