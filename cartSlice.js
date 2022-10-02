import { createSlice } from "@reduxjs/toolkit";

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
            } else {
                const tempProduct = {...action.payload, cartQty: 1};
                state.items.push(tempProduct);
            }
        }
    }
})


export const {addToCart} = cartSlice.actions

export default cartSlice.reducer