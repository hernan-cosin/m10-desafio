import { useMyOrders } from "lib/hooks";
import { LargeText, Subtitle } from "ui/typography";
import {
  OrderDataContainer, Orders,
  OrdersContainer,
  OrdersContent
} from "./styled";

export function OrdersPage() {
  const myOrders = useMyOrders();

  return (
    <OrdersContainer>
      <OrdersContent>
        <Subtitle>Mis ordenes:</Subtitle>
        <OrderDataContainer>
          {
          myOrders?.length == 0 ?
          <LargeText>Aun no tienes ordenes para mostrar</LargeText> : 
          <Orders orders={myOrders} /> 
          }
        </OrderDataContainer>
      </OrdersContent>
    </OrdersContainer>
  );
}
