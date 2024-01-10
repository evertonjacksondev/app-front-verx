import styled from "styled-components";

interface IProps {
    color?: string
    alert?: boolean
}
export const Paragraph = styled.p<IProps>`
font-size:18;
color:${(props) => {
        if (props.alert) return 'red'
        if (props.color) return props.color
        if (!props.color) return 'black'
    }} ;
`