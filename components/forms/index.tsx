import { getToken, sendCode } from "lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "ui/buttons";
import { TextField } from "ui/textfield";
import { Body } from "ui/typography";


const SigninFormContainer = styled.form`
    width: min-content;
    `

export const Form = ()=>{
    const router = useRouter()
    const [email, setEmail] = useState("") 
    const [emailSetted, setEmailSetted] = useState(false) 
    
    async function handleEmailSubmit(e:any) {
        e.preventDefault()
        if (!e.target.email.value) {
            return
        } else {
            const email = e.target.email.value
            await sendCode(email)
            
            setEmail(email)
            setEmailSetted(true)
        }
    }

    async function handleCodeSubmit(e:any) {
        e.preventDefault()
        if (!e.target.code.value) {
            return
        } else {
            const code = parseInt(e.target.code.value)
            await getToken(email, code)
            router.push("/")
        }
    }

    return emailSetted? <SigninCodeForm onSubmit={handleCodeSubmit}/> : <SigninEmailForm onSubmit={handleEmailSubmit} />;
}

export const SigninEmailForm = ({onSubmit}:any)=>{
    return <SigninFormContainer onSubmit={onSubmit}>
        <TextField label="Email" name="email" type="email" placeholder="tu_email@gmail.com"></TextField>
        <Button backgroundColor="blue" className="signin-email-form ">Continuar</Button>
    </SigninFormContainer>
}

export const SigninCodeForm = ({onSubmit}:any)=>{
    return <SigninFormContainer  onSubmit={onSubmit}>
        <TextField label="Código" name="code" type="number" placeholder=" 1 2 3 4"></TextField>
        <Body>Te envíamos un código a tu email</Body>
        <Button backgroundColor="blue" className="signin-email-form ">Ingresar</Button>
    </SigninFormContainer>
}