import { generateOrder, getSavedToken } from "lib/api";
import {
  flavorsSelected,
  redirectTo,
  buyingProductInformation,
} from "lib/atoms";
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
import { Label } from "ui/textfield/styled";

export function ItemCard({
  imgUrl,
  title,
  quantity,
  description,
  price,
  flavors,
  objectID,
}: any) {
  const router = useRouter();
  const flavorsSelectedVal = useRecoilValue(flavorsSelected);
  const [toggleDisableButton, setToggleDisableButton] = useState(false);
  const [amount, setAmount] = useState(1);
  const setRedirectTo = useSetRecoilState(redirectTo);
  const setBuyingProductInformation = useSetRecoilState(
    buyingProductInformation
  );
  
  useEffect(() => {
    if (flavorsSelectedVal.length == 0) {
      // si no hay ningun sabor seleccionado el botón comprar se deshabilita
      setToggleDisableButton(true);
    } else {
      setToggleDisableButton(false);
    }
  }, [flavorsSelectedVal]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const inSession = getSavedToken();

    if (inSession) {
      // si está logeado se inicia el proceso de compra
      setBuyingProductInformation({
        amount: amount.toString(),
        flavor: flavorsSelectedVal,
      });
      router.push("/checkout/" + objectID);
    } else {
      // si no está logeado se redirige al usuario a iniciar sesión
      // para luego volver a dirigirlo al producto que estaba intentando comprar
      setRedirectTo({ asPath: router.asPath });
      router.push("/signin");
    }
  }

  const handleChange = (event: any) => {
    // escucha el evento de cantidad de productos seleccionados
    // se modifica el valor del producto en base a esto
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
        <LargeText>Unidades: {quantity}</LargeText>
        <Body>Categoria: {description}</Body> 
        <div>
          <Label as="label">Cantidad</Label>
          <select
            name="amount"
            id="amount"
            onChange={handleChange}
            style={{ display: "inline-block", maxWidth: "50px", margin: "10px 0 0 10px", width: "100%", }}
          > 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
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
