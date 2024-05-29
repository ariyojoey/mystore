import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
    qty: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id)
            if (itemIndex >= 0) {
                state.items[itemIndex].cartQty += 1
                toast.info(`Added More ${action.payload.title} To Cart`, {
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

            localStorage.setItem("items", JSON.stringify(state.items))
        },

        decreaseCart(state, action){
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id)
            if (state.items[itemIndex].cartQty > 1) {
                state.items[itemIndex].cartQty -= 1
                toast.error(`Removed ${action.payload.title} from cart`, {
                    position: "bottom-left"
                })
            } else if (state.items[itemIndex].cartQty === 1) {
                toast.error(`You have one ${action.payload.title} left`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("items", JSON.stringify(state.items))
        },

        removeFromCart(state, action) {
          const remainingCartItems =  state.items.filter(item => item._id !== action.payload._id )
          state.items = remainingCartItems

          localStorage.setItem("items", JSON.stringify(state.items))
        },

        clearCart(state, action) {
            state.items = []
            toast.done("Cart Cleared!")
            localStorage.setItem("items", JSON.stringify(state.items))
        },

        getTotals(state, action) {
          let {total, quantity} =  state.items.reduce((cartTotal, item) => {
                const {price, cartQty} = item
                const itemTotal = price * cartQty

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQty

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })
            
            state.qty = quantity
            state.totalAmount = total
        }
    }
})


export const {addToCart, clearCart, decreaseCart, getTotals, removeFromCart} = cartSlice.actions

export default cartSlice.reducer