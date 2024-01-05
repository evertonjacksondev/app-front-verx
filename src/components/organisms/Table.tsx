import { Table } from "antd"
import { ReactNode } from "react"
import styled from "styled-components"

interface ITableProps {

    columns: Array<any>
    dataSource: Array<any>
    children: ReactNode
}

const ContainerTable = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:8px;
`
const ItemTable = styled.div`
width:1220px;

`
const ContainerItemTableButton = styled.div`
display:flex;
width:1220px;
justify-content:flex-end;

`
const ItemButton = styled.div`


`
export const NewTable = ({ columns, dataSource, children }: ITableProps) => {


    return (
        <ContainerTable>
            <ContainerItemTableButton>
                <ItemButton>
                    {children}
                </ItemButton>
            </ContainerItemTableButton>
            <ItemTable>
                <Table columns={columns} dataSource={dataSource} />
            </ItemTable>
        </ContainerTable>

    )
}