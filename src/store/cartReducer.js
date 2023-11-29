import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Logic to add item to cart
            state.items.push(action.payload);
            state.totalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            // Logic to remove item from cart
            const index = state.items.findIndex(item => item.id === action.payload);
            state.totalAmount -= state.items[index].price;
            state.items.splice(index, 1);
        },
        // Add other reducers as needed
    },
});

export const { addToCart, removeFromCart } = cartReducer.actions;

export default cartReducer.reducer;
