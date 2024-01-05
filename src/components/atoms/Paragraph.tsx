import styled from "styled-components";

interface IProps {
    color?: string
}
export const Paragraph = styled.p<IProps>`
font-size:18;
color:${(props) => props.color ? props.color : 'black' }} ;
`