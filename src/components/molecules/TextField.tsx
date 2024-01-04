
import { Fragment } from "react";
import { Input } from "../atoms/Input";

interface ITextField {
    name: string
}

export const TextField = ({ name }: ITextField) => {
    return (
        <Fragment>
            {name}
            <Input name={name} />
        </Fragment>)
}