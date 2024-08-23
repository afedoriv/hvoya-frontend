import { CART_STORAGE_KEY } from '../constants/constants';

export function formatStoredItems(storage, userId) {
    const formattedItems = storage.map(({ productId, productQty }) => ({
        productId,
        productQty,
        userId,
    }));
    return formattedItems;
}

export function getFromStorage() {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    return storedCart && storedCart !== '[]' ? JSON.parse(storedCart) : null;
}

export function removeFromStorage() {
    localStorage.removeItem(CART_STORAGE_KEY);
}

export function saveToStorage(items) {
    const cart = items.map(({ id, productId, productQty }) => ({
        id,
        productId,
        productQty,
    }));

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}
