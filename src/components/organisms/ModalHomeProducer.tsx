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
import { UserDto, UserErrosDto } from "../../Http/dto/User-dto";
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
  const [userValues, setUserValues] = useState<UserDto>()
  const [inputMask, setInputMask] = useState<string>("")
  const [errosInput, setErrosInput] = useState<UserErrosDto>()
  const { enqueueSnackbar } = useSnackbar()
  if (!isActiveModalProducer) return


  const validateForm = () => {

    let erros = new UserErrosDto

    if (!userValues?.city)
      erros.city = { message: '*Preenchimento Obrigatório*' }

    if (!userValues?.document)
      erros.document = { message: '*Preenchimento Obrigatório*' }

    if (userValues?.document_type == 'PF' && userValues.document) {
      const validate = cpf.isValid(userValues.document)
      if (!validate) erros.document = { message: '*CPF Incorreto*' }
    }

    if (userValues?.document_type == 'PJ' && userValues.document) {
      const validate = cnpj.isValid(userValues.document)
      if (!validate) erros.document = { message: '*CNPJ Incorreto*' }
    }

    if (!userValues?.document_type)
      erros.document_type = { message: '*Preenchimento Obrigatório*' }

    if (!userValues?.uf)
      erros.uf = { message: '*Preenchimento Obrigatório*' }

    if (!userValues?.name)
      erros.name = { message: '*Preenchimento Obrigatório*' }

    setErrosInput(erros)

    return !erros ? true : false
  }

  const handleClick = async () => {

    if (validateForm() && userValues?.city && userValues?.document && userValues?.name && userValues?.uf && userValues?.document_type) {

      const userRequest = new UserRequest()
      await userRequest.createUser(userValues)
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
    setErrosInput({
      city: { message: '' },
      document: { message: '' },
      document_type: { message: '' },
      name: { message: '' },
      uf: { message: '' }
    })
    setUserValues({
      city: '',
      document: '',
      document_type: '',
      name: '',
      uf: ''
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target;

    if (name == 'document_type') {
      const mask = value === 'PJ' ? '99.999.999/9999-99' : '999.999.999-99';
      setInputMask(mask);
    }

    setUserValues((currentValue) => {
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
            <SelectField
              onChange={handleChange}
              defaultValue=""
              name="document_type"
              placeHolder='Tipo de Pessoa'
              value={userValues?.document_type}
              error={errosInput?.document_type}
              option={documentType} />
            <TextFieldMask
              onChange={handleChange}
              name='document'
              placeHolder="CPF ou CNPJ"
              value={userValues?.document}
              error={errosInput?.document}
              mask={inputMask} />
            <TextField
              onChange={handleChange}
              name="name"
              placeHolder="Nome do produtor"
              value={userValues?.name}
              error={errosInput?.name}
            />
            <TextField
              onChange={handleChange}
              name="city"
              placeHolder="Cidade"
              value={userValues?.city}
              error={errosInput?.city}
            />
            <SelectField
              onChange={handleChange}
              defaultValue="UF"
              name="uf"
              placeHolder='UF'
              value={userValues?.uf}
              error={errosInput?.uf}
              option={ufData} />
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