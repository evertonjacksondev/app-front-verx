import { Fragment, useState } from "react"
import styled from "styled-components"
import { ChartDash } from "../atoms/ChartDash"
import "react-multi-carousel/lib/styles.css";
import { Card } from "../molecules/Card";


const ContainerDashBoard = styled.div`
display:flex;
justify-content:center;
width:100%;
`

const ContainerDashBoardItem = styled.div`
display:flex;
justify-content:flex-start;
flex-wrap:wrap;
max-width:1100px;
`

const ItemDashBoard = styled.div`
width:320px;
margin:10px;
`

export const DashBoards = () => {


    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])


    return (
        <Fragment>
            <ContainerDashBoard>
                <ContainerDashBoardItem>
                    <ItemDashBoard>
                        <ChartDash
                            data={data}
                            options={{ title: 'Estado' }}
                        />
                    </ItemDashBoard>
                    <ItemDashBoard>
                        <ChartDash
                            data={data}
                            options={{ title: 'Cultivo' }}
                        />
                    </ItemDashBoard>
                    <ItemDashBoard>
                        <ChartDash
                            data={data}
                            options={{ title: 'Uso de solo (Área agricultável e vegetação)' }}
                        />
                    </ItemDashBoard>

                    <ItemDashBoard>
                        <Card />
                    </ItemDashBoard>

                </ContainerDashBoardItem>
            </ContainerDashBoard>


        </Fragment>



    )
}