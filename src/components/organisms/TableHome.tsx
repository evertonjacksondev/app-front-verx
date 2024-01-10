import { Table } from "antd"
import styled from "styled-components"
import { IconButton } from "../molecules/IconButton"
import { useProviderGlobal } from "../../context/global.context"

interface ITableProps {

    columns: Array<any>
    dataSource: Array<any>
}

const ContainerTable = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:8px;
`
const ItemTable = styled.div`
width:1100px;

`
const ContainerItemTableButton = styled.div`
display:flex;
width:1100px;
gap:8px;
justify-content:flex-end;

`
const ItemButton = styled.div`


`
export const TableHome = ({ columns, dataSource }: ITableProps) => {
    const { isActiveModalFarm, setIsActiveModalFarm } = useProviderGlobal()
    const { isActiveModalProducer, setIsActiveModalProducer } = useProviderGlobal()

    return (
        <ContainerTable>
            <ContainerItemTableButton>
                <ItemButton>
                    <IconButton
                        iconName="add"
                        label="Adicionar Produtor"
                        isLoadingIcon={false}
                        onClick={() => setIsActiveModalProducer(!isActiveModalProducer)} />
                </ItemButton>
                <ItemButton>
                    <IconButton
                        iconName="add"
                        label="Adicionar Fazenda"
                        isLoadingIcon={false}
                        onClick={() => setIsActiveModalFarm(!isActiveModalFarm)} />
                </ItemButton>
            </ContainerItemTableButton>
            <ItemTable>
                <Table rowKey='id' columns={columns} dataSource={dataSource} />
            </ItemTable>
        </ContainerTable>

    )
}