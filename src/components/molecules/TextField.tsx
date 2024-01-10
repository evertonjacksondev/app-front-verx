
import { ChangeEventHandler, Fragment } from "react";
import { Input } from "../atoms/Input";

interface ITextField {
    name: string
    placeHolder: string
    onChange?:ChangeEventHandler
}

export const TextField = ({ name, placeHolder,onChange }: ITextField) => {
    return (
        <Fragment>
            {placeHolder}
            <Input onChange={onChange} name={name} />
        </Fragment>)
}