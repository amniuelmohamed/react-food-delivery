import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
const totalQuantity =
    localStorage.getItem("totalQuantity") !== null
        ? JSON.parse(localStorage.getItem("totalQuantity"))
        : 0;
const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const saveOnLocalStorage = (items, totalQuantity, totalAmount) => {
    localStorage.setItem("cartItems", JSON.stringify(items.map((el) => el)));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: items,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount,
    },
    reducers: {
        addItem: (state, action) => {
            const { id, title, price, image01, addQuantity } = action.payload;

            const foundedItem = state.cartItems.find(
                (cartItem) => cartItem.id === id
            );

            if (!foundedItem) {
                const cartItem = {
                    id,
                    title,
                    price,
                    image01,
                    quantity: Number(addQuantity) || 1,
                    totalPrice: addQuantity ? price * addQuantity : price,
                };
                state.cartItems.push(cartItem);
            } else {
                foundedItem.quantity =
                    foundedItem.quantity + (+addQuantity || 1);
                foundedItem.totalPrice += addQuantity
                    ? foundedItem.price * addQuantity
                    : foundedItem.price;
            }

            state.totalQuantity += +addQuantity || 1;
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + item.totalPrice,
                0
            );

            saveOnLocalStorage(
                state.cartItems,
                state.totalQuantity,
                state.totalAmount
            );
        },

        updateItemQuantity: (state, action) => {
            const { id, newQuantity } = action.payload;
            const foundedItem = state.cartItems.find(
                (cartItem) => cartItem.id === id
            );

            if (foundedItem) {
                foundedItem.quantity = Number(newQuantity);
                foundedItem.totalPrice =
                    foundedItem.quantity * foundedItem.price;

                state.totalQuantity = state.cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                );
                state.totalAmount = state.cartItems.reduce(
                    (total, item) => total + item.totalPrice,
                    0
                );
            }

            saveOnLocalStorage(
                state.cartItems,
                state.totalQuantity,
                state.totalAmount
            );
        },

        decrementItem: (state, action) => {
            const id = action.payload;
            const foundedItem = state.cartItems.find(
                (cartItem) => cartItem.id === id
            );

            if (foundedItem) {
                foundedItem.quantity--;
                foundedItem.totalPrice -= foundedItem.price;

                state.totalQuantity--;
                state.totalAmount -= foundedItem.price;

                if (foundedItem.quantity === 0) {
                    state.cartItems = state.cartItems.filter(
                        (item) => item.id !== foundedItem.id
                    );
                }
            }

            saveOnLocalStorage(
                state.cartItems,
                state.totalQuantity,
                state.totalAmount
            );
        },

        deleteItem: (state, action) => {
            const id = action.payload;
            const foundedItem = state.cartItems.find(
                (cartItem) => cartItem.id === id
            );

            if (foundedItem) {
                state.totalQuantity -= foundedItem.quantity;
                state.totalAmount -= foundedItem.totalPrice;

                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== foundedItem.id
                );
            }

            saveOnLocalStorage(
                state.cartItems,
                state.totalQuantity,
                state.totalAmount
            );
        },
    },
});

export const { addItem, decrementItem, deleteItem, updateItemQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
