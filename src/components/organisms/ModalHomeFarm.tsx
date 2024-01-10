import styled from "styled-components";
import { useProviderGlobal } from "../../context/global.context";
import { TextField } from "../molecules/TextField";
import { ModalBar } from "../molecules/ModalBar";
import { IconButton } from "../molecules/IconButton";
import { FarmRequest } from "../../Http/request/FarmRequest";
import { ChangeEvent, useState } from "react";
import { useSnackbar } from "notistack";
import { FarmDto } from "../../Http/dto/Farm-dto";


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


export const ModalHomeFarm = () => {
  const { isActiveModalFarm = false, setIsActiveModalFarm } = useProviderGlobal()
  const [value, setValue] = useState<FarmDto>()
  const { enqueueSnackbar } = useSnackbar()
  if (!isActiveModalFarm) return


  const handleClick = async () => {

    if (value?.farm_name && value.farm_name && value.farm_area_used) {

      const farmRequest = new FarmRequest()
      await farmRequest.createFarm(value)
        .then(() => {
          enqueueSnackbar('Fazenda Criada!', { variant: 'success' })
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

    setIsActiveModalFarm(!isActiveModalFarm)
    handleClear()
  }
  const handleClear = () => {

    setValue({})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target;



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
          name="Cadastrar Fazenda" />
        <ModalListItems>
          <ModalItem>
            <TextField
              name="farm_name"
              placeHolder="Nome da Fazenda"
              onChange={handleChange}
            />
            <TextField
              name="farm_area_total"
              placeHolder="Área total em hectares da fazenda"
              onChange={handleChange}
            />
            <TextField
              name="farm_area_used"
              placeHolder="Area Utilizada em Hectares"
              onChange={handleChange}
            />
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