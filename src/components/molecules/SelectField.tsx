import { Fragment } from "react"
import { Select } from "../atoms/Select"

interface ISelectProps {
    name: string
    option: { id: string | number, name: string; value: string }[]
    placeHolder: string
}

export const SelectField = ({ name, placeHolder, option }: ISelectProps) => {


    return (

        <Fragment>
            {placeHolder}
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