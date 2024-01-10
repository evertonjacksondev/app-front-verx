import styled from "styled-components";
import { useProviderGlobal } from "../../context/global.context";
import { TextField } from "../molecules/TextField";
import { ModalBar } from "../molecules/ModalBar";
import { IconButton } from "../molecules/IconButton";
import { FarmRequest } from "../../Http/request/FarmRequest";
import { ChangeEvent, useState } from "react";
import { useSnackbar } from "notistack";
import { FarmDto, FarmErrosDto } from "../../Http/dto/Farm-dto";
import { SelectField } from "../molecules/SelectField";


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
 display:flex;
 flex-direction:column;

 margin:5px;
  `

const ModalItemButton = styled.div`
border-radius:8px;
justify-content:center;
display:flex;
width:250px;
flex-direction:row;
 `

const ItemButton = styled.div`
border-radius:8px;
justify-content:center;
display:flex;
width:150px;


 `

interface IModalHomeFarmProps {
  selectValues: any
}

export const ModalHomeFarm = ({ selectValues }: IModalHomeFarmProps) => {
  const { isActiveModalFarm = false, setIsActiveModalFarm, isActiveModalProducer, setIsActiveModalProducer } = useProviderGlobal()
  const [farmValues, setFarmValues] = useState<FarmDto>()
  const [errosInput, setErrosInput] = useState<FarmErrosDto>()
  const { enqueueSnackbar } = useSnackbar()
  if (!isActiveModalFarm) return
  const farmRequest = new FarmRequest()


  const handleClick = async () => {
    try {

      if (validateForm() && farmValues?.farm_name && farmValues.farm_area_total && farmValues.farm_area_used) {


        await farmRequest.createFarm(farmValues)
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
    } catch (error: any) {
      setErrosInput(error)
    }
  }

  const handleClosed = async () => {

    setIsActiveModalFarm(!isActiveModalFarm)
    handleClear()
  }

  const handleClear = () => {
    setErrosInput({
      farm_area_total: { message: '' },
      farm_area_used: { message: '' },
      farm_name: { message: '' }
    })
    setFarmValues({
      farm_area_total: 0,
      farm_area_used: 0,
      farm_name: '',
      name_producer: ''
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFarmValues((currentValue: any) => {
      return {
        ...currentValue,
        [name]: value
      }
    })


  }

  const validateForm = () => {

    let erros = new FarmErrosDto

    if (farmValues && farmValues.farm_area_used > farmValues.farm_area_total) {
      erros.farm_area_used = { message: 'Area ultilizada não pode ser maior que Area total da fazenda' }
    }
    if (!farmValues?.farm_name)
      erros.farm_name = { message: '*Preenchimento Obrigatório*' }

    if (!farmValues?.farm_area_total)
      erros.farm_area_total = { message: '*Preenchimento Obrigatório*' }

    if (!farmValues?.farm_area_used)
      erros.farm_area_used = { message: '*Preenchimento Obrigatório*' }

    if (!farmValues?.name_producer)
      erros.name_producer = { message: '*Preenchimento Obrigatório*' }


    setErrosInput(erros)

    return !erros ? true : false
  }



  return (
    <ModalContainer>
      <ModalContainerListItems>
        <ModalBar
          iconName='add'
          name="Cadastrar Fazenda" />
        <ModalListItems>

          <ModalItem>
            <SelectField
              name="name_producer"
              defaultValue=""
              option={selectValues}
              value={farmValues?.name_producer}
              placeHolder="Produtor"
              onChange={handleChange}
              error={errosInput?.name_producer}
            />

            <ModalItemButton>
              <ItemButton >
                <IconButton
                  isLoadingIcon={false}
                  label="Adicionar Produtor"
                  iconName="add"
                  onClick={() => setIsActiveModalProducer(!isActiveModalProducer)} />
              </ItemButton>
            </ModalItemButton>

            <TextField
              name="farm_name"
              placeHolder="Nome da Fazenda"
              value={farmValues?.farm_name}
              onChange={handleChange}
              error={errosInput?.farm_name}
            />
            <TextField
              name="farm_area_total"
              placeHolder="Área total em hectares da fazenda"
              value={farmValues?.farm_area_total}
              error={errosInput?.farm_area_total}
              onChange={handleChange}
            />
            <TextField
              name="farm_area_used"
              placeHolder="Area Utilizada em Hectares"
              value={farmValues?.farm_area_used}
              onChange={handleChange}
              error={errosInput?.farm_area_used}
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