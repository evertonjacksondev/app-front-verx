
import { Input } from "../atoms/Input";

interface ITextField {
    name: string
}

export const TextField = ({ name }: ITextField) => {
    return (
        <Input>
            {name}
        </Input>
    )
}