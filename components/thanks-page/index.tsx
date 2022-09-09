import { Button } from "ui/buttons";
import { Subtitle, Title } from "ui/typography";
import { ThanksContainer, ThanksContent } from "./styled";

export function OrdersPage() {
  return (
    <ThanksContainer>
      <ThanksContent>
        <Title>¡Gracias por su compra!</Title>
        <Subtitle>Hemos recibido su pago correctamente.</Subtitle>
        <Button className="thanks-page" backgroundColor="blue">
          Volver
        </Button>
      </ThanksContent>
    </ThanksContainer>
  );
}
