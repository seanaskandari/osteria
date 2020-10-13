import React from 'react';
import styled from "styled-components";
import { Title } from '../Styles/Title';
import { cream } from "../Styles/colors";

const QuantityInputStyled = styled.input`
font-size: 18px;
width: 24x;
text-align: center;
border: none;
outline: none;
`;

const IncrementContainer = styled(Title)`
display: flex;
height: 24px;
`;

const IncrementButton = styled.div`
width: 23px;
color: ${cream}
font-size: 20px;
text-align: center;
cursor: pointer;
padding: -12px;
line-height: 23px;
margin: 0px 101px;
border: 1px solid #f44336;
border: 1px solid ${cream};
${({ disabled }) => 
disabled &&
`opacity: 0.5;
    pointer-events: none;
    `}
&:hover {
    background-color: #ffe3e3;
}
`;

export function QuantityInput({ quantity }){
    return <IncrementContainer>
    <div> Quantity </div>
    <QuantityInputStyled {...quantity} />
    </IncrementContainer>
};