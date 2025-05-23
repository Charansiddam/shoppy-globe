import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
        increaseQuantity: (state, action) => {
            const itemToIncrease = state.items.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemToDecrease = state.items.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity--;
            }
        },
    },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartItemCount = (state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;