import styled from "styled-components";
import { Paragraph } from "../atoms/Paragraph";
import { Line } from "../atoms/Divider";
import { Icon } from "../atoms/Icon";
import { Fragment } from "react";

export const ContainerModalBar = styled.div`
padding:20px;
display:flex;
background-color:#4477CE;
align-items:center;
`

export const ModalBarItem = styled.div`


`

interface IModalBarProps {
    name: string,
    iconName: string,
}

export const ModalBar = ({ name, iconName }: IModalBarProps) => {


    return (
        <Fragment>
            <ContainerModalBar>
            <ModalBarItem>
                    <Icon name={iconName}></Icon>
                </ModalBarItem>
                <ModalBarItem>
                    <Paragraph> {name}</Paragraph>
                    <Line></Line>
                </ModalBarItem>
            </ContainerModalBar>
        </Fragment>
    )
}