import { ChangeEventHandler, Fragment } from "react"
import { Select } from "../atoms/Select"

interface ISelectProps {
    name: string
    option: { id: string | number, name: string; value: string }[]
    placeHolder: string
    defaultValue: string
    onChange?: ChangeEventHandler
}

export const SelectField = ({ defaultValue, name, placeHolder, onChange, option }: ISelectProps) => {


    return (

        <Fragment>
            {placeHolder}
            <Select onChange={onChange} defaultValue={defaultValue} name={name}>
                <option value={defaultValue} hidden>Selecione {placeHolder}</option>
                {option.map((items) => (
                    <option key={items.id} value={items.name}>
                        {items.value}
                    </option>
                ))}</Select>
        </Fragment>
    )
}