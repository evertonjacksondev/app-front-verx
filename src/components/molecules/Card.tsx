
import styled from "styled-components"
import { Paragraph } from "../atoms/Paragraph"



const ContainerCard = styled.div`
display:flex;
flex-wrap:wrap;
width:1100px;
`

const ItemCard = styled.div`
padding:20px;
height:100px;
width:320px;
border: 1px solid #D2D2D2;
border-radius: 8px;
margin:10px;
box-shadow: 0 1px 10px rgb(0 0 0 / 0.25);
`
const ItemCardValue = styled.div`
padding:20px;
border-radius: 8px;
margin:10px;

`

export const Card = () => {


    return (
        <ContainerCard>
            <ItemCard>
                <Paragraph>Total de fazendas em quantidade</Paragraph>
                <ItemCardValue>
                    <Paragraph>50.000 (m2)</Paragraph>
                </ItemCardValue>
            </ItemCard>
            <ItemCard>
                <Paragraph>Total de fazendas em hectares (área total)</Paragraph>
                <ItemCardValue>
                    <Paragraph>5 (ha)</Paragraph>
                </ItemCardValue>
            </ItemCard>
        </ContainerCard>

    )
}