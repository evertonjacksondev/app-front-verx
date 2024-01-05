import styled from "styled-components";
import { useProviderGlobal } from "../../context/global.context";
import { TextField } from "../molecules/TextField";
import { ModalBar } from "../molecules/ModalBar";
import { TextFieldMask } from "../molecules/TextFieldMask";
import ufData from '../../db/UF.json'
import productData from '../../db/Product.json'
import { SelectField } from "../molecules/SelectField";
import { IconButton } from "../molecules/IconButton";


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


export const ModalHome = () => {
  const { isActiveModal = false, setIsActiveModal } = useProviderGlobal()

  if (!isActiveModal) return

  const handleClick = () => {
    setIsActiveModal(!isActiveModal)
  }


  return (
    <ModalContainer>
      <ModalContainerListItems>
        <ModalBar
          iconName='add'
          name="Cadastrar Produtor Rural" />
        <ModalListItems>
          <ModalItem>
            <TextFieldMask name='document' placeHolder="CPF ou CNPJ" mask="99.999.999/9999-99" key="1" />
            <TextField name="nameClient" placeHolder="Nome do produtor" key="2" />
            <TextField name="nameFarm" placeHolder="Nome da Fazenda" key="3" />
            <TextField name="city" placeHolder="Cidade" key="4" />
          </ModalItem>
          <ModalItem>
            <SelectField defaultValue="UF" name="UF" placeHolder='UF' option={ufData}></SelectField>
            <TextField name="farmArea" placeHolder="Área total em hectares da fazenda" key="6" />
            <TextField name="availableArea" placeHolder="Área agricultável em hectares" key="7" />
            <TextField name="unavailableArea" placeHolder="Área de vegetação em hectares" key="8" />
            <SelectField defaultValue="UF" name="product" placeHolder="Culturas plantadas" option={productData} key="9" />
          </ModalItem>
        </ModalListItems>
        <ModalListItemsButton>
          <ModalItemButton >
            <IconButton
              isLoadingIcon={false}
              label="Fechar"
              iconName="closed"
              onClick={handleClick} />
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