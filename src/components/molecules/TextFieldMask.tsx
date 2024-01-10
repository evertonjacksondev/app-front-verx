

import { ChangeEventHandler, Fragment, } from "react";
import { InputMaskField } from "../atoms/InputMaskField";
import { Paragraph } from "../atoms/Paragraph";


interface ITextFieldMask {
  name: string
  mask: string
  placeHolder: string
  onChange: ChangeEventHandler,
  value?: any,
  error?: { message: string }
}

export const TextFieldMask = ({ name, mask, placeHolder, onChange, value, error }: ITextFieldMask) => {
  return (
    <Fragment>
      {placeHolder}
      <InputMaskField value={value} onChange={onChange} name={name} mask={mask} />
      {<Paragraph alert={true} >{error?.message && error.message}</Paragraph>}
    </Fragment>
  )
}