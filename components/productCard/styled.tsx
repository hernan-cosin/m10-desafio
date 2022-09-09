import styled from "styled-components";

interface ProductCardContainerProps {
  disable?: boolean;
}

export const ProductCardContainer = styled.div<ProductCardContainerProps>`
  max-width: 300px;
  width: 100%;
  border-radius: 4px;
  background-color: var(--grey-25);
  box-shadow: 0px 2px 4px var(--black);
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
  opacity: ${(props) => (props.disable ? ".60" : "initial")};
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5px;
`;
export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const PriceInformation = styled.div``;
