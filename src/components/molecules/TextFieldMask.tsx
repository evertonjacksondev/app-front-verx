
import styled from "styled-components";
import InputMask from 'react-input-mask';
import { Fragment } from "react";

interface IInputProps {
  background?: string;
  radius?: string;
  width?: string;
  height?: string;
}


export const InputMaskField = styled(InputMask) <IInputProps>`
    color: #787575;
    width:100%;
    max-height:60px;  
    background-color:#F5F5F5; 
    border:1px solid  #D9D9D9;
    height:50px;
    font-size: 14px;
    border-radius: 8px;
    ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    :focus {
      color: #454040;
      outline: none;
      border:1px solid #D9D9D9;

    }
    :active{
      color: #696767;
      border:1px solid #D9D9D9;
      outline: none;    
      
    }
    ::placeholder{
      color: #787575;
   
    }
    `


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