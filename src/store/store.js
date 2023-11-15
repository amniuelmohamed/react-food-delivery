import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartVisibilitySlice from "./slices/cartVisibilitySlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartVisibility: cartVisibilitySlice,
        cart: cartSlice,
        auth: authSlice,
    },
});
