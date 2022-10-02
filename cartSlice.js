import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: [],
    qty: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].cartQty += 1
                toast.info(`Added Another ${action.payload.title} To Cart`, {
                    position: "bottom-left",
                    theme: "colored"
                })
            } else {
                const tempProduct = {...action.payload, cartQty: 1};
                state.items.push(tempProduct);
                toast.success(`Added ${action.payload.title} To Cart`, {
                    position: "bottom-left"
                })
            }
        }
    }
})


export const {addToCart} = cartSlice.actions

export default cartSlice.reducer