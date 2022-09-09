import { generateOrder, getSavedToken } from "lib/api";
import { flavorsSelected, redirectTo, buyingProductInformation } from "lib/atoms";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "ui/buttons";
import { Body, LargeText, Subtitle, Title } from "ui/typography";
import {
  ImageContainer,
  InfoContainerForm,
  ItemCardContainer,
  Select,
} from "./styled";

export function ItemCard({
  imgUrl,
  title,
  quantity,
  description,
  price,
  flavors,
  objectID,
}: any) {
  const flavorsSelectedVal = useRecoilValue(flavorsSelected);
  const [toggleDisableButton, setToggleDisableButton] = useState(false);
  const [amount, setAmount] = useState(1);
  const router = useRouter();
  const setRedirectTo = useSetRecoilState(redirectTo);
  const setBuyingProductInformation = useSetRecoilState(buyingProductInformation)
  useEffect(() => {
    if (flavorsSelectedVal.length == 0) {
      setToggleDisableButton(true);
    } else {
      setToggleDisableButton(false);
    }
  }, [flavorsSelectedVal]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const inSession = getSavedToken();

    if (inSession) {
      // const orderRes = await generateOrder({
      //   objectID: objectID,
      //   amount: amount.toString(),
      //   flavor: flavorsSelectedVal,
      // });
      setBuyingProductInformation({
        amount: amount.toString(),
        flavor: flavorsSelectedVal
      })
      router.push("/checkout/" + objectID)
      // window.location = orderRes.url;
    } else {
      setRedirectTo({ asPath: router.asPath }); // sets global state to redirect to same page after login
      router.push("/signin");
    }
  }

  const handleChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <ItemCardContainer>
      <ImageContainer>
        <Image
          src={imgUrl}
          layout="fill"
          width={3}
          height={2}
          objectFit="cover"
          alt={title}
        />
      </ImageContainer>
      <InfoContainerForm onSubmit={handleSubmit}>
        <Subtitle>{title}</Subtitle>
        <LargeText>Cantidad: {quantity}</LargeText>
        <Body>{description}</Body>
        <select
          name="amount"
          id="amount"
          onChange={handleChange}
          style={{ display: "block", maxWidth: "50px", margin: "10px 0 0 0" }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <Title className="card-item-price">${price * amount}</Title>
        <Select quantity={quantity} options={flavors} />
        {toggleDisableButton ? (
          <Button disabled className={"card-item-price"} backgroundColor="blue">
            Comprar
          </Button>
        ) : (
          <Button className={"card-item-price"} backgroundColor="blue">
            Comprar
          </Button>
        )}
      </InfoContainerForm>
    </ItemCardContainer>
  );
}
