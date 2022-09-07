import Image from "next/image";
import { Button } from "ui/buttons";
import { Body, LargeText, Subtitle, Title } from "ui/typography";
import {
  ImageContainer,
  InfoContainer,
  ItemCardContainer,
  Select,
} from "./styled";
import { useRecoilValue } from "recoil";
import { flavorsSelected } from "lib/atoms";
import { useEffect, useState } from "react";
import { generateOrder, getSavedToken } from "lib/api";
import { useSetRecoilState } from "recoil";
import { redirectTo } from "lib/atoms";
import { useRouter } from "next/router";

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

  useEffect(() => {
    if (flavorsSelectedVal.length == 0) {
      setToggleDisableButton(true);
    } else {
      setToggleDisableButton(false);
    }
  }, [flavorsSelectedVal]);

  async function handleBuyClick() {
    // console.log({objectID,flavorsSelectedVal, amount})
    // console.log(flavorsSelectedVal)
    // console.log(amount)
    const inSession = getSavedToken();
    console.log(inSession ? true : false);

    if (inSession) {
      const orderRes = await generateOrder({
        objectID: objectID,
        amount: amount.toString(),
        flavor: flavorsSelectedVal,
      });
      window.location = orderRes.url;
    } else {
      // console.log(router);

      setRedirectTo({asPath: router.asPath})
      router.push("/signin")
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
      <InfoContainer>
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
          <Button
            className={"card-item-price"}
            backgroundColor="blue"
            onClick={handleBuyClick}
          >
            Comprar
          </Button>
        )}
      </InfoContainer>
    </ItemCardContainer>
  );
}
