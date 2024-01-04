
import { Fragment } from "react";
import { Input } from "../atoms/Input";

interface ITextField {
    name: string
    placeHolder: string
}

export const TextField = ({ name, placeHolder }: ITextField) => {
    return (
        <Fragment>
            {placeHolder}
            <Input name={name} />
        </Fragment>)
}