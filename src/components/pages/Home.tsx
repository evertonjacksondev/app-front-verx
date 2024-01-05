import { Fragment } from "react"
import { useProviderGlobal } from "../../context/global.context"
import { Modal } from '../organisms/Modal'
import ListOfProducers from "../../db/ListOfProducers.json"
import { NewTable } from "../organisms/Table"
import { IconButton } from "../molecules/IconButton"

export const Home = () => {

    const { isActiveModal, setIsActiveModal } = useProviderGlobal()

    const handleOpen = () => {
        console.log('cheguei open')

    }
    const handleDelete = () => {
        console.log('cheguei delete')
    }

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
                        <IconButton
                            isLoadingIcon={false}
                            label="Deletar"
                            iconName="delete"
                            onClick={handleOpen} />
                        <IconButton
                            isLoadingIcon={false}
                            label="Ver"
                            iconName="search"
                            onClick={handleDelete} />
                    </Fragment>)
            },
        },

    ]
    return (
        <Fragment>
            <Modal />
            <IconButton
                iconName="add"
                label="Adicionar Produtor"
                isLoadingIcon={false}
                onClick={() => setIsActiveModal(!isActiveModal)} />
            <NewTable columns={columns} dataSource={ListOfProducers} />
        </Fragment>
    )
}