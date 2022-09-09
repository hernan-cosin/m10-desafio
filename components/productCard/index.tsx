import Image from "next/image";
import { useRouter } from "next/router";
import { Body, LargeText } from "ui/typography";
import {
  PriceInformation,
  ProductCardContainer,
  ProductInfoContainer,
  ProductInformation,
} from "./styled";

export const ProductCard = ({ title, price, imgUrl, objectID, stock }: any) => {
  const router = useRouter();
  const disable = stock == 0 ? true : false;

  function handleItemClick() {
    router.push("/item/" + objectID);
  }

  return (
    <ProductCardContainer disable={disable} onClick={handleItemClick}>
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
          <LargeText bold>
            {disable ? <LargeText>Sin stock</LargeText> : title}
          </LargeText>
          <Body>{title}</Body>
        </ProductInformation>
        <PriceInformation>
          <LargeText>${price}</LargeText>
        </PriceInformation>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
};
