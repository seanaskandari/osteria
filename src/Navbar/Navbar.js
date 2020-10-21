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
    display: flex;
    justify-content: space-between;
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

export function Navbar({login, loggedIn, logout}){
    return (
    <NavbarStyled>
        <Logo>
            OSTERIA
        </Logo>
        <UserStatus>
            {loggedIn !== "loading" ? (
                <>
                {loggedIn ? "Logged in." : ""}
                {loggedIn ? (
                    <LoginButton onClick={logout}>Log Out</LoginButton>
                ) : (
                    <LoginButton onClick={login}>Log In/ Sign Up </ LoginButton>
                )}
                </>
            ) : (
                "loading..."
            )}
        </UserStatus>
    </NavbarStyled>
    );
}