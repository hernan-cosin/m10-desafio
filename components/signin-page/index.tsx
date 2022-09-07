import { Subtitle } from "ui/typography";
import { SigninContainer, SigninContent } from "./styled";
import { Form } from "components/forms"
import {useMe} from "lib/hooks"
import {useRouter} from "next/router"
  
export function SigninPage() {
  const userData = useMe()
  const router = useRouter()

  if (userData) {
      router.push("/profile")
  } 
  return (
    <SigninContainer>
      <SigninContent>
          <Subtitle>Ingresar</Subtitle>
          <Form />
          <SigninContainer/>
      </SigninContent>
    </SigninContainer>
  );
}
  