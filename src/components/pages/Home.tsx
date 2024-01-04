import { Fragment } from "react"
import { Button } from "../atoms/Button"
import { useProviderGlobal } from "../../context/global.context"
import { Modal } from '../organisms/Modal'
import ListOfProducers from "../../db/ListOfProducers.json"
import { IconButton } from "../molecules/IconButton"
import { NewTable } from "../organisms/Table"

export const Home = () => {

    const { isActiveModal, setIsActiveModal } = useProviderGlobal()


    const columns = [
        {
            title: 'Nome do Produtor',
            dataIndex: 'nameClient',
            key: 'nameClient',
        },
        {
            title: 'UF',
            dataIndex: 'UF',
            key: 'UF',
        },
        {
            title: 'CPF/CNPJ',
            dataIndex: 'document',
            key: 'document',
        },
        {
            title: 'Cidade',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Área agricultável em hectares',
            dataIndex: 'availableArea',
            key: 'availableArea',
        },
        {
            title: 'Área de vegetação em hectares',
            dataIndex: 'unavailableArea',
            key: 'unavailableArea',
        },
        {
            title: 'Área de vegetação em hectares',
            dataIndex: 'product',
            key: 'Culturas plantadas',
        },
        {
            title: 'Ações',
            dataIndex: 'action',
            key: 'action',
            render: () => {
                return (
                    <Fragment>
                        <IconButton name="Delete" />
                        <IconButton name="Ver" />
                    </Fragment>)

            },
        },

    ]
    return (
        <Fragment>
            <Modal />
            <Button onClick={() => setIsActiveModal(!isActiveModal)}>Adicionar Produtor</Button>
            <NewTable columns={columns} dataSource={ListOfProducers} />
        </Fragment>
    )
}