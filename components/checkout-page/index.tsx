import { generateOrder } from "lib/api";
import { useEffect } from "react";
import { CheckoutContainer, CheckoutContent } from "./styled";

export function CheckoutPage({ productData }: any) {
  const buy = async () => {
    const orderRes = await generateOrder({
      objectID: productData.productId,
      amount: productData.amount,
      flavor: productData.flavor,
    });

    window.location = orderRes.url;
  };

  useEffect(() => {
    buy();
  });

  return (
    <CheckoutContainer>
      <CheckoutContent></CheckoutContent>
    </CheckoutContainer>
  );
}
