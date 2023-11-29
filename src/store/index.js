import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'; // Assuming you have a cart slice

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // Add other reducers here
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});
