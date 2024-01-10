
import { ChangeEventHandler, Fragment } from "react";
import { Input } from "../atoms/Input";
import { Paragraph } from "../atoms/Paragraph";

interface ITextField {
    name: string
    placeHolder: string
    onChange?: ChangeEventHandler
    value?:string | number
    error?: { message: string }
}

export const TextField = ({ name, placeHolder, onChange, error }: ITextField) => {
    return (
        <Fragment>
            {placeHolder}
            <Input onChange={onChange} name={name} />
            {<Paragraph alert={true} >{error?.message && error.message}</Paragraph>}
        </Fragment>)
}