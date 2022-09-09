import styled from "styled-components";
import { Body, LargeText } from "ui/typography";

export const OrdersContainer = styled.section`
  min-height: 35vh;
  padding: 50px 5px;
`;
export const OrdersContent = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;
export const OrderDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const OrderItem = styled.div`
  border: solid var(--dark-blue);
  border-radius: 4px;
  padding: 5px;
`;

const Status = styled(Body)`
  color: white;
  background-color: ${(props) => (props.pending ? "red" : "green")};
  width: fit-content;
  border-radius: 4px;
  padding: 0 4px;
  margin: 5px 0;
`;

export function Orders(orders: any) {
  return orders?.orders?.map((o: any) => {
    const fecha = o.createdAt;
    const pending = o.status == "pending" ? "pending" : "";

    return (
      <OrderItem key={o.orderId}>
        <LargeText>Orden: {o.orderId}</LargeText>
        <Status pending={pending}>
          Estado: {o.status == "pending" ? "Pendiente" : "Aprovado"}
        </Status>
        <Body>Fecha: {fecha}</Body>
      </OrderItem>
    );
  });
}
