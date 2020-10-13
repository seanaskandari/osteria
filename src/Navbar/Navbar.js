import React from 'react';
import styled from 'styled-components';
import { cream } from "../Styles/colors";
import { Title } from "../Styles/Title";

const NavbarStyled = styled.div`
    background-color: ${cream};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: black;
    text-shadow: 1px 1px 3px grey;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            OSTERIA
        </Logo>

    </NavbarStyled>
}