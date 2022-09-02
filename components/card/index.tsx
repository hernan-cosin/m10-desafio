import Image from "next/image";
import { Body, LargeText } from "ui/typography";
import {
    PriceInformation, ProductCardContainer,
    ProductInfoContainer,
    ProductInformation
} from "./styled";
import {useRouter} from "next/router"

export const ProductCard = ({ title, price, imgUrl, objectID }: any) => {
  const router = useRouter()
  
  function handleItemClick() {
    router.push("/item/" + objectID)
  }

  return (
    <ProductCardContainer onClick={handleItemClick}>
      <Image
        src={imgUrl}
        layout="responsive"
        width={3}
        height={2}
        objectFit="cover"
        alt={title}
      />
      <ProductInfoContainer>
        <ProductInformation>
          <LargeText bold>{title}</LargeText>
          <Body>{title}</Body>
        </ProductInformation>
        <PriceInformation>
          <LargeText>${price}</LargeText>
        </PriceInformation>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
};
