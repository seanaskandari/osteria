import React from 'react';
import styled from 'styled-components';
import {FoodLabel} from "../Menu/FoodGrid";
import {cream} from "../Styles/colors";
import {Title} from "../Styles/Title";
import {formatPrice} from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Modifications } from "./Modifications";
import { useModifications } from "../Hooks/useModifications";

const Dialog = styled.div`
width: 500px;
background-color: white;
position: fixed;
top: 75px;
z-index: 5;
max-height: calc(100% - 100px);
left: calc(50% - 250px);
display: flex;
flex-direction: column;
`;

export const DialogContent = styled.div`
overflow: auto;
min-height: 100px;
padding: 0px 40px;
padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
box-shadow: 0px -2px 10px 0px grey;
height: 60px;
display: flex;
justify-content: center;
`;

export const ConfirmButton = styled(Title)`
margin: 10px;
color: black;
height: 20px;
border-radius: 5px;
padding: 10px;
text-align: center;
width: 200px;
cursor: pointer;
background-color: ${cream};
`;

const DialogShadow = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 0px;
background-color: black;
opacity: 0.7;
z-index: 4;
`;

const DialogBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
${({img}) => `background-image: url(${img});`}
background-position: center;
background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
top: 100px;
font-size: 30px;
padding: 5px 40px;
`;

export function getPrice(order){
    return order.quantity * (order.price + order.modifications.filter(t => t.checked).length);
}

function hasModifications(food){
    return food.section === 'Pasta';
}


function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const modifications = useModifications(openFood.modifications);

    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantity.value,
        modifications: modifications.modifications
    };

    function addToOrder(){
        setOrders([...orders, order]);
        close();
    }

    return (
    <>
    <DialogShadow onClick={close} />
    <Dialog>
        <DialogBanner img={openFood.img}>
        <DialogBannerName> {openFood.name} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
            <QuantityInput quantity = {quantity}/>
            {hasModifications(openFood) && <>
            <h3>Select Any Requests</h3>
            <Modifications {...modifications}/>
            </>}
        </DialogContent>
        <DialogFooter>
            <ConfirmButton onClick={addToOrder}>
                Add to Cart: {formatPrice(getPrice(order))}
                </ConfirmButton>
        </DialogFooter>
    </Dialog>
    
    </ >
    );
}

export function FoodDialog(props){
    if(!props.openFood) return null;
    return <FoodDialogContainer {...props}/>
}