import React from 'react';
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
    return openOrderDialog ? <>
        <DialogShadow/>
        <Dialog>
            <DialogContent>
                <h2>🚚  Your order is on the way!</h2>
                <p> Thank you for choosing Osteria! We appreciate your business!</p>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    setOrders([]);
                    setOpenOrderDialog();
                }}>
                    Add to Order
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
    </> : <div />

}