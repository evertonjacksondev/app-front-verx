

import { ChangeEventHandler, Fragment, } from "react";
import { InputMaskField } from "../atoms/InputMaskField";


interface ITextFieldMask {
  name: string
  mask: string
  placeHolder: string
  onChange: ChangeEventHandler,
  value?: any
}

export const TextFieldMask = ({ name, mask, placeHolder, onChange, value }: ITextFieldMask) => {
  return (
    <Fragment>
      {placeHolder}
      <InputMaskField value={value} onChange={onChange} name={name} mask={mask} />
    </Fragment>
  )
}