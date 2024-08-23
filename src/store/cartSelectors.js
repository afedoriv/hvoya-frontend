import {
    FREE_SHIPPING_LIMIT,
    SHIPPING_FEE,
} from '../utils/constants/constants';

export const estimateSavings = (state) =>
    state.cart.cart.reduce(
        (sum, product) =>
            sum + product.regularPrice * product.discount * product.productQty,
        0,
    );

export const estimateSubtotal = (state) =>
    state.cart.cart.reduce(
        (sum, product) => sum + product.unitPrice * product.productQty,
        0,
    );

export function estimateTotal(state) {
    const subtotal = estimateSubtotal(state);
    const total =
        subtotal > 0 && subtotal < FREE_SHIPPING_LIMIT
            ? subtotal + SHIPPING_FEE
            : subtotal;

    return total;
}

export const getCart = (state) => state.cart.cart;

export const getLoadingState = (state) => state.cart.isLoading;

export const getProductQty = (id) => (state) =>
    state.cart.cart.find((product) => product.productId === id)?.productQty ??
    0;

export const getTotalQty = (state) =>
    state.cart.cart.reduce((sum, product) => sum + product.productQty, 0);
