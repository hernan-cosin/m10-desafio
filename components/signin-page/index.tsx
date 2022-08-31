import { Subtitle } from "ui/typography";
import { SigninContainer, SigninContent } from "./styled";
import { Form } from "components/forms"
// import { useState } from "react";
  
  export function SigninPage() {
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
  