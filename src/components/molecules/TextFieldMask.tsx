

import { Fragment } from "react";
import { InputMaskField } from "../atoms/InputMaskField";

interface ITextFieldMask {
  name: string
  mask: string
  placeHolder: string
}

export const TextFieldMask = ({ name, mask, placeHolder }: ITextFieldMask) => {
  return (
    <Fragment>
      {placeHolder}
      <InputMaskField name={name} mask={mask} />
    </Fragment>
  )
}