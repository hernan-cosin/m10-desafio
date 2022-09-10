import { generateOrder } from "lib/api";
import { useEffect } from "react";
import { CheckoutContainer, CheckoutContent } from "./styled";

export function CheckoutPage({ productData }: any) {
  const buy = async () => {
    // inicia el proceso de checkout de mercadopago generando la preferencia
    const orderRes = await generateOrder({
      objectID: productData.productId,
      amount: productData.amount,
      flavor: productData.flavor,
    });
    // redirige al usuario a la página de mercadopago para realizar el pago
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
