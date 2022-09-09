import { useMyOrders } from "lib/hooks";
import { Subtitle } from "ui/typography";
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
          <Orders orders={myOrders} />
        </OrderDataContainer>
      </OrdersContent>
    </OrdersContainer>
  );
}
