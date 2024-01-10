import styled from "styled-components";
import { useProviderGlobal } from "../../context/global.context";
import { TextField } from "../molecules/TextField";
import { ModalBar } from "../molecules/ModalBar";
import { TextFieldMask } from "../molecules/TextFieldMask";
import ufData from '../../db/UF.json'
import documentType from '../../db/Document_type.json'
import { SelectField } from "../molecules/SelectField";
import { IconButton } from "../molecules/IconButton";
import { UserRequest } from "../../Http/request/UserRequest";
import { ChangeEvent, useState } from "react";
import { UserDto } from "../../Http/dto/User-dto";
import { useSnackbar } from "notistack";
import { cnpj, cpf } from 'cpf-cnpj-validator';


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 10px rgb(0 0 0 / 0.2);
  display: flex;
  z-index:1200;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const ModalContainerListItems = styled.div`
overflow:hidden;
display:flex;
gap:5px;
background:white;
justify-content:center;
flex-direction:column;
border-radius:8px;

`

const ModalListItems = styled.div`
max-width:800px;
justify-content:center;
display:flex;
flex-direction:row;
flex-wrap:wrap;
width:50vw;
background:white;
 `

const ModalListItemsButton = styled.div`
max-width:800px;
 display:flex;
 flex-direction:row;
 justify-content: center;
 flex-wrap:wrap;
 gap:5px;
 width:50vw;
 background:white;
 padding:10px;
  `

const ModalItem = styled.div`
 width:250px;
 margin:5px;
  `

const ModalItemButton = styled.div`
border-radius:8px;
justify-content:center;
display:flex;
width:250px;
flex-direction:row;
 `


export const ModalHomeProducer = () => {
  const { isActiveModalProducer = false, setIsActiveModalProducer } = useProviderGlobal()
  const [value, setValue] = useState<UserDto>()
  const [inputMask, setInputMask] = useState<string>("")
  const { enqueueSnackbar } = useSnackbar()
  if (!isActiveModalProducer) return

  const validateCnpjOrCPF = () => {

    if (value?.document_type == 'PF' && value.document) {
      const validate = cpf.isValid(value.document)
      if (!validate) enqueueSnackbar('CPF Incorreto', { variant: 'error' })
      return validate
    }

    if (value?.document_type == 'PJ' && value.document) {
      const validate = cnpj.isValid(value.document)
      if (!validate) enqueueSnackbar('CNPJ Incorreto', { variant: 'error' })
      return validate
    }

    return false
  }
  const handleClick = async () => {

    if ( value?.city && value?.document && value?.name && value?.uf && value?.document_type) {

      const userRequest = new UserRequest()
      await userRequest.createUser(value)
        .then(() => {
          enqueueSnackbar('Produtor Criado!', { variant: 'success' })
          handleClosed()
          handleClear()
        })
        .catch((error) => {
          enqueueSnackbar(error.message, { variant: 'error' })
          handleClosed()
          handleClear()
        })

    }
  }
  const handleClosed = async () => {

    setIsActiveModalProducer(!isActiveModalProducer)
    handleClear()
  }
  const handleClear = () => {

    setValue({})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target;

    if (name == 'document_type') {
      const mask = value === 'PJ' ? '99.999.999/9999-99' : '999.999.999-99';
      setInputMask(mask);
    }


    setValue((currentValue) => {
      return {
        ...currentValue,
        [name]: value
      }
    })
  }

  return (
    <ModalContainer>
      <ModalContainerListItems>
        <ModalBar
          iconName='add'
          name="Cadastrar Produtor Rural" />
        <ModalListItems>
          <ModalItem>
            <SelectField onChange={handleChange} defaultValue="" name="document_type" placeHolder='Tipo de Pessoa' option={documentType}></SelectField>
            <TextFieldMask onChange={handleChange} name='document' placeHolder="CPF ou CNPJ" mask={inputMask} key="1" />
            <TextField onChange={handleChange} name="name" placeHolder="Nome do produtor" key="2" />
            <TextField onChange={handleChange} name="city" placeHolder="Cidade" key="4" />
            <SelectField onChange={handleChange} defaultValue="UF" name="uf" placeHolder='UF' option={ufData}></SelectField>
          </ModalItem>
        
        </ModalListItems>
        <ModalListItemsButton>
          <ModalItemButton >
            <IconButton
              isLoadingIcon={false}
              label="Fechar"
              iconName="closed"
              onClick={handleClosed} />
          </ModalItemButton>
          <ModalItemButton >
            <IconButton
              isLoadingIcon={false}
              label="Salvar"
              iconName="save"
              onClick={handleClick} />
          </ModalItemButton>
        </ModalListItemsButton>
      </ModalContainerListItems>
    </ModalContainer>

  )

}