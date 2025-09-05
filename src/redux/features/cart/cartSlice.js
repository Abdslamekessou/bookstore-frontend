
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
const initialState = {
    cartItems : []
}

export const cartSlice = createSlice({
    name: 'cart' ,
    initialState : initialState ,
    reducers : {
        addToCart:(state , action) => {
            const existingItems = state.cartItems.find(item => item._id === action.payload._id) 

            if(!existingItems){
                state.cartItems.push(action.payload)
                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added!',
                        text: `Your book "${action.payload.title}" has been added to the cart.`,
                        showConfirmButton: false,
                        width: '600px',
                        timer: 1500,
                        toast: true
                });

            }else{
                Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Already in Cart!',
                        text: `The book "${action.payload.title}" is already in your cart.`,
                        showConfirmButton: false,
                        width: '600px',
                        timer: 1500,
                        toast: true
            });

            }
        } ,
        removeFromCart : (state , action) => {
            state.cartItems =  state.cartItems.filter(
                item => item._id !== action.payload._id
        )
        },

        clearCart : (state) => {
            state.cartItems = []
        }
    }
})

export const {addToCart , removeFromCart , clearCart} = cartSlice.actions
export default cartSlice.reducer;