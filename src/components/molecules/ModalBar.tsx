import styled from "styled-components";
import { Paragraph } from "../atoms/Paragraph";
import { Line } from "../atoms/Divider";

export const ContainerModalBar = styled.div`
padding:20px;
`

interface IModalBarProps {
    name: string,
    icon: string,
}



export const ModalBar = ({ name }: IModalBarProps) => {


    return (
        <ContainerModalBar>
            <Paragraph>{name}</Paragraph>
            <Line></Line>
        </ContainerModalBar>
    )
}