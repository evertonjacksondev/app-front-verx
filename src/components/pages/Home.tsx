import { Fragment } from "react"
import { ModalHome } from '../organisms/ModalHome'
import ListOfProducers from "../../db/ListOfProducers.json"
import { TableHome } from "../organisms/TableHome"
import { IconButton } from "../molecules/IconButton"
import { Container } from "../atoms/Container"
import { Item } from "../atoms/Item"
import { DashBoards } from "../organisms/DashBoardHome"

export const Home = () => {

   

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
            width: '19%',
        },

        {
            title: 'CPF/CNPJ',
            dataIndex: 'document',
            key: 'document',
            width: '12%',
        },
        {
            title: 'Cidade',
            dataIndex: 'city',
            key: 'city',
            width: '12%',
        },
        {
            title: 'UF',
            dataIndex: 'UF',
            key: 'UF',
            width: '5%',
        },


        {
            title: 'Ações',
            dataIndex: 'action',
            key: 'action',
            width: '12%',
            render: () => {
                return (
                    <Fragment>
                        <Container>
                            <Item>
                                <IconButton
                                    isLoadingIcon={false}
                                    tooltipTitle="Excluir Produtor"

                                    iconName="delete"
                                    onClick={handleOpen} />
                            </Item>
                            <Item>
                                <IconButton
                                    tooltipTitle="Visualizar Produtor"
                                    isLoadingIcon={false}

                                    iconName="search"
                                    onClick={handleDelete} />
                            </Item>
                        </Container>
                    </Fragment>)
            },
        },

    ]
    return (
        <Fragment>
            <DashBoards />
            <ModalHome />
            <TableHome columns={columns} dataSource={ListOfProducers}/>
        </Fragment>
    )
}