import { createSlice } from '@reduxjs/toolkit';
import { fetchCart } from './cartActions';
import { getUnitPrice } from '../utils/helpers/cart';
import { removeFromStorage, saveToStorage } from '../utils/helpers/storage';
import { getTimeId } from '../utils/helpers/helpers';

export const initialState = {
    cart: [],
    isLoading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const newItem = {
                ...action.payload,
                id: getTimeId(),
                unitPrice: getUnitPrice(
                    action.payload.regularPrice,
                    action.payload.discount,
                ),
            };
            state.cart.push(newItem);
        },
        deleteProduct(state, action) {
            state.cart = state.cart.filter(
                (product) => product.productId !== action.payload,
            );
        },
        updateProduct(state, action) {
            const product = state.cart.find(
                (product) => product.productId === action.payload.productId,
            );
            product.productQty = action.payload.productQty;
        },
        clearCart(state) {
            state.cart = initialState.cart;
            removeFromStorage();
        },
        saveCart(state) {
            saveToStorage(state.cart);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.isLoading = true;
                state.error = initialState.error;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.isLoading = initialState.isLoading;
                state.cart = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.isLoading = initialState.isLoading;
                state.error = action.payload || 'Failed to load cart products.';
            });
    },
});

export const { addProduct, deleteProduct, updateProduct, clearCart, saveCart } =
    cartSlice.actions;

export default cartSlice.reducer;
