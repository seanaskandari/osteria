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
const UserStatus = styled.div`
    color: black;
    font-size: 12px;
    margin-right: 30px;
`
const LoginButton = styled.span`
    cursor: pointer;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            OSTERIA
        </Logo>
        <UserStatus>
        <LoginButton>Log In/ Sign Up</LoginButton>
        </UserStatus>
    </NavbarStyled>
}