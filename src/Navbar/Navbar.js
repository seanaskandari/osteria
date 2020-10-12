import React from 'react';
import styled from 'styled-components';
import { cream } from "../styles/colors";
import { Title } from "../styles/title";

const NavbarStyled = styled.div`
    background-color: ${cream};
    padding: 10px;
    position: fixed;
    width: 100%;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: black;
    text-shadow: 1px 1px 3px black;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            OSTERIA
        </Logo>
        
    </NavbarStyled>
}