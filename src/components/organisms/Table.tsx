import { Table } from "antd"
import styled from "styled-components"

interface ITableProps {

    columns: Array<any>
    dataSource: Array<any>

}

const ContainerTable = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:90vh;
`
const ContainerItemTable = styled.div`
width:1220px;

`

export const NewTable = ({ columns, dataSource }: ITableProps) => {


    return (
        <ContainerTable>
            <ContainerItemTable>
                <Table columns={columns} dataSource={dataSource} />
            </ContainerItemTable>
        </ContainerTable>

    )
}