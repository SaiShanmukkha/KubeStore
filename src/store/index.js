import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: {
    cart: cartReducer
  },
  devTools: process.env.NODE_ENV != "production",
  middleware: [thunk]
})