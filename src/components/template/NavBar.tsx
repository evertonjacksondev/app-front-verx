
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
background-color:#07689D;
height:65px;
z-index:1200;
margin-bottom:10px;
box-shadow: 0 1px 10px rgb(0 0 0 / 0.65);
`
export const NavBar = () => {

    return (
        <Fragment>
            <Nav/>
            <Outlet />
        </Fragment>
    )
}