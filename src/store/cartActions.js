import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addCartItems, getCartItems } from '../services/apiCartItem';
import { getProductsByIds } from '../services/apiProduct';
import { combineData, formatData } from '../utils/helpers/cart';
import {
    getFromStorage,
    formatStoredItems,
    removeFromStorage,
} from '../utils/helpers/storage';
import { getValuesByKey } from '../utils/helpers/helpers';
import { initialState } from './cartSlice';

const options = {
    className: 'notification-control',
    duration: 60000,
};

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',

    async function ({ isAuthenticated, userId }, { rejectWithValue }) {
        try {
            let data = [];
            const storage = getFromStorage();

            if (isAuthenticated) {
                if (storage) {
                    const storedItems = formatStoredItems(storage, userId);
                    const insertionError = await addCartItems(storedItems);

                    if (insertionError)
                        toast.error(
                            'An error occurred while saving your cart. Please add the products again.',
                            options,
                        );

                    removeFromStorage();
                }

                data = await getCartItems();
            } else if (storage) {
                const productIds = getValuesByKey(storage, 'productId');

                data = await getProductsByIds(productIds);
            }

            if (!data?.length) return initialState.cart;

            const cart = isAuthenticated
                ? formatData(data)
                : combineData(data, storage);

            return cart;
        } catch (error) {
            toast.error(error.message);
            return rejectWithValue(error.message);
        }
    },
);
