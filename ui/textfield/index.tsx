import styled from "styled-components"
import {Tiny} from "ui/typography"
import { useForm } from "react-hook-form";

export const Input = styled.input.attrs(props=>({
    type: props.type,
    className: props.className
}))`
    min-width: 230px;
    height: 40px;
    border: 2px solid var(--black);
    border-radius: 4px;
    padding: 0 0 0 10px;

    &.input {
        display: block;
        margin: 25px auto 0 auto;
    }
`

export const Label = styled(Tiny)`

`
export function TextField({label, name, placeholder, type}:any) {

    return <Label as="label">{label}
        <Input type={type} name={name} placeholder={placeholder} />
    </Label>
}