import { Button } from "ui/buttons";
import { Subtitle, Title } from "ui/typography";
import { ThanksContainer, ThanksContent } from "./styled";
import { useRouter } from "next/router";

export function ThanksPage() {
  const router = useRouter()

  function handleBackClick() {
    router.push("/")
  }

  return (
    <ThanksContainer>
      <ThanksContent>
        <Title>¡Gracias por su compra!</Title>
        <Subtitle>Hemos recibido su pago correctamente.</Subtitle>
        <Button className="thanks-page" onClick={handleBackClick} backgroundColor="blue">
          Volver
        </Button>
      </ThanksContent>
    </ThanksContainer>
  );
}
