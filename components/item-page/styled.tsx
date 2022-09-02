import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "ui/buttons";
import { Body, LargeText, Subtitle, Title } from "ui/typography";

export const ItemContainer = styled.section`
  min-height: 35vh;
  padding: 50px 5px;
`;

export const ItemContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const ItemCardContainer = styled.section`
  max-width: 350px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--grey-15);
  box-shadow: 2px 2px 4px var(--grey-100);

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    column-gap: 10px;
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  max-width: 350px;
  width: 100%;
  position: relative;
  height: 250px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const FlavorOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
  margin: 0 0 10px 0;
`;

const Option = styled(Body)`
  border: 1px solid var(--dark-blue);
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;

  &.selected {
    background-color: var(--dark-blue);
    color: var(--white);
  }
`;

const FlavorOption = ({ onClick, children, selected }: any) => {
  return (
    <Option
      onClick={() => {
        onClick(children);
      }}
      className={selected.includes(children) ? "selected" : ""}
    >
      {children}
    </Option>
  );
};

function Select({ quantity, options }: any) {
  const multiple = quantity > 4 ? true : false;

  const [selected, setSelected] = useState<string[]>([]);

  function handleMaxSelect(flavor: string) {
    const maxFlavorsToSelect = multiple? 3 : 1
    
    setSelected((oldArray) => {
      if (oldArray.includes(flavor)) {
        const newOldArrary = oldArray.filter((val) => val !== flavor);

        return [...newOldArrary];
      }
      if (oldArray.length == maxFlavorsToSelect && !oldArray.includes(flavor)) {
        oldArray.pop();

        return [...oldArray, flavor];
      } else {
        return [...oldArray, flavor];
      }
    });
  }

    return (
      <FlavorOptionContainer>
        {options.map((o: string) => {
          return (
            <FlavorOption onClick={handleMaxSelect} selected={selected} key={o}>
              {o}
            </FlavorOption>
          );
        })}
      </FlavorOptionContainer>
    );
}

export function ItemCard({
  imgUrl,
  title,
  quantity,
  description,
  price,
  flavors,
}: any) {
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
        <Title className="card-item-price">${price}</Title>
        <Select quantity={quantity} options={flavors} />
        <Button className={"card-item-price"} backgroundColor="blue">
          Comprar
        </Button>
      </InfoContainer>
    </ItemCardContainer>
  );
}
