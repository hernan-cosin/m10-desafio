import {Input, Label} from "./styled"

export function TextField({label, name, placeholder, type, defaultValue} :any) {

    return <Label as="label">{label}
        <Input type={type} name={name} placeholder={placeholder} defaultValue={defaultValue}/>
    </Label>
}