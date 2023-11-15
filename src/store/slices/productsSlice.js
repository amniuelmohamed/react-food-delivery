import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/fake-data/products";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        popular: [],
        others: [],
        product: {},
    },
    reducers: {
        getAllProducts: (state) => {
            state.popular = products;
        },
        getProductsByCategory: (state, action) => {
            state.popular = products.filter(
                (el) =>
                    el.category.toUpperCase() === action.payload.toUpperCase()
            );
        },
        getProductById: (state, action) => {
            state.product = products.find((el) => el.id === action.payload);
        },
        getFourProductsByCategory: (state, action) => {
            state.others = products
                .filter(
                    (el) =>
                        el.category.toUpperCase() ===
                        action.payload.toUpperCase()
                )
                .slice(0, 4);
        },
    },
});

export const {
    getAllProducts,
    getProductsByCategory,
    getFourProductsByCategory,
    getProductById,
} = productsSlice.actions;
export default productsSlice.reducer;
