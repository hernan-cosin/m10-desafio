import { Form } from "components/forms";
import { useMe } from "lib/hooks";
import { useRouter } from "next/router";
import { Subtitle } from "ui/typography";
import { SigninContainer, SigninContent } from "./styled";

export function SigninPage() {
  const userData = useMe();
  const router = useRouter();

  if (userData) {
    router.push("/profile");
  }

  return (
    <SigninContainer>
      <SigninContent>
        <Subtitle>Ingresar</Subtitle>
        <Form />
        <SigninContainer />
      </SigninContent>
    </SigninContainer>
  );
}
