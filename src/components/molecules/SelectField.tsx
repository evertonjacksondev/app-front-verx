import { Fragment } from "react"
import { Select } from "../atoms/Select"

interface ISelectProps {
    name: string,
    option: { id: string | number, name: string; value: string }[];
}

export const SelectField = ({ name, option }: ISelectProps) => {


    return (

        <Fragment>
            {name}
            <Select name={name}>
                <option value="" hidden>Selecione a {name}</option>
                {option.map((items) => (
                    <option key={items.id} value={items.name}>
                        {items.value}
                    </option>
                ))}</Select>
        </Fragment>
    )
}