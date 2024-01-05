import { Fragment } from "react"
import { Select } from "../atoms/Select"

interface ISelectProps {
    name: string
    option: { id: string | number, name: string; value: string }[]
    placeHolder: string
    defaultValue: string
}

export const SelectField = ({ defaultValue,name, placeHolder, option }: ISelectProps) => {


    return (

        <Fragment>
            {placeHolder}
            <Select defaultValue={defaultValue} name={name}>
                <option value={defaultValue} hidden>Selecione a {name}</option>
                {option.map((items) => (
                    <option key={items.id} value={items.name}>
                        {items.value}
                    </option>
                ))}</Select>
        </Fragment>
    )
}