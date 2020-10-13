import React from 'react';
import styled from 'styled-components';
import {foods} from "../Data/FoodData";
import {FoodGrid, FoodLabel, Food} from "./FoodGrid" ;

const MenuStyled = styled.div`
height: 1000px;
margin: 0px 400px 50px 20px;
`

export function Menu(){
    return (
    <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods]) => (
            <>
            <h1> {sectionName} </h1>
            <foodGrid>
                {foods.map(food => (
                    <Food img={food.img}>
                        <FoodLabel>{food.name}</FoodLabel>
                    </Food>
                ))}
            </foodGrid>
            </>
        ))}
    </MenuStyled>
    );
}