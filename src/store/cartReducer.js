import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    items: [],
    totalAmount: 0,
};

const loadCartFromLocalStorage = () => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : { items: [], totalAmount: 0 };
  };
  
// const initialState = loadCartFromLocalStorage();

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        emptyCart: (state) => {
            state.items = [];
            state.totalAmount = 0.00;
            localStorage.removeItem('cartItems');
        },
        addToCart: (state, action) => {
            // Logic to add item to cart
            let found = false;
            console.log(action);
            for(var ele of state.items){
                if(ele.size == action.payload.size && ele.color == action.payload.color && ele.pvid == action.payload.pvid){
                    ele.quantity += 1;
                    toast.success("Item added to cart.");
                    found = true;
                    break;
                }
            }

            if(!found){
                state.items.push(action.payload);
                toast.success("Item added to cart.");
            }
                        
            state.totalAmount += action.payload.price;

            localStorage.setItem('cartItems', JSON.stringify(state));

        },
        removeFromCart: (state, action) => {            
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].pid === action.payload) {
                    state.items[i].quantity -= 1;
                    state.totalAmount -= state.items[i].price;
                    toast.info("Item removed from cart.");
            
                    // If quantity is 0, remove the item from the cart
                    if (state.items[i].quantity === 0) {
                        state.items.splice(i, 1); // Remove item at index i
                        // Since we've removed the item, we need to adjust the loop counter
                        i--; 
                    }
            
                    break; // Exit the loop once the item is found and processed
                }
            }          
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartReducer.actions;

export default cartReducer.reducer;
