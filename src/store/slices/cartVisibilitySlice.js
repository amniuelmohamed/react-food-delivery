import { createSlice } from "@reduxjs/toolkit";

const cartVisibilitySlice = createSlice({
    name: "cartVisibility",
    initialState: {
        isVisible: false,
    },
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
});

export const { toggle } = cartVisibilitySlice.actions;
export default cartVisibilitySlice.reducer;
