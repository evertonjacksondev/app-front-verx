import { Fragment, useEffect, useState } from "react"
import { ModalHomeProducer } from '../organisms/ModalHomeProducer'
import { TableHome } from "../organisms/TableHome"
import { IconButton } from "../molecules/IconButton"
import { Container } from "../atoms/Container"
import { Item } from "../atoms/Item"
import { DashBoards } from "../organisms/DashBoardHome"
import { ModalHomeFarm } from "../organisms/ModalHomeFarm"
import { UserRequest } from "../../Http/request/UserRequest"

export const Home = () => {
    const [selectValues, setSelectValues] = useState([])
    const [userValues, setUserValues] = useState([])
    const userRequest = new UserRequest()

    const handleOptions = async () => {

        const optionsUsersRaw = await userRequest.listAllUserSelect();
        if (optionsUsersRaw) {

            const options = optionsUsersRaw.map(
                (options: any) => {
                    return {
                        id: options.id,
                        name: options.document,
                        value: options.name
                    }
                })
            console.log(options)
            setSelectValues(options)
        }

    };

    const getUsers = async () => {

        const user = await userRequest.listAllUser()
        setUserValues(user)
    }

    useEffect(() => {
        handleOptions()
        getUsers()
    }, []);

    const handleOpen = () => {
        console.log('cheguei open')

    }
    const handleDelete = () => {
        console.log('cheguei delete')
    }

    const columns = [
        {
            title: 'Nome do Produtor',
            dataIndex: 'name',
            key: 'name',
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
            dataIndex: 'uf',
            key: 'uf',
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
            <ModalHomeFarm selectValues={selectValues} />
            <ModalHomeProducer />
            <TableHome columns={columns} dataSource={userValues} />
        </Fragment>
    )
}