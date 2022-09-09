import { flavorsSelected } from "lib/atoms";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Body } from "ui/typography";

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

export const ImageContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  max-width: 350px;
  width: 100%;
  position: relative;
  height: 250px;
`;

export const InfoContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

export const FlavorOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
  margin: 0 0 10px 0;
`;

export const Option = styled(Body)`
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

export function Select({ quantity, options }: any) {
  const setFlavorAtom = useSetRecoilState(flavorsSelected);

  const multiple = quantity > 4 ? true : false;

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setFlavorAtom(selected);
  }, [selected, setFlavorAtom]);

  function handleMaxSelect(flavor: string) {
    const maxFlavorsToSelect = multiple ? 3 : 1;

    setSelected((oldArray) => {
      if (oldArray.includes(flavor)) {
        const newOldArrary = oldArray.filter((val) => val !== flavor);

        return [...newOldArrary];
      }
      if (oldArray.length == maxFlavorsToSelect && !oldArray.includes(flavor)) {
        const duplicateArr = [...oldArray];

        duplicateArr.pop();
        oldArray = duplicateArr;

        return [...oldArray, flavor];
      } else {
        return [...oldArray, flavor];
      }
    });
  }

  return (
    <FlavorOptionContainer>
      {options?.map((o: string) => {
        return (
          <FlavorOption onClick={handleMaxSelect} selected={selected} key={o}>
            {o}
          </FlavorOption>
        );
      })}
    </FlavorOptionContainer>
  );
}
