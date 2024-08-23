import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useStripeHelpers } from './useStripeHelpers';
import { ModalContext } from '../../contexts/ModalContext';
import { CheckoutError } from '../../utils/errors/CheckoutError';
import { scrollToTop } from '../../utils/helpers/helpers';
import { BASE_SERVER_URL } from '../../utils/constants/config';

export function useCheckout() {
    const { createPaymentMethod } = useStripeHelpers();
    const { openWindow: showMessage } = useContext(ModalContext);

    const checkoutApi = async ({ order, userId }) => {
        const { paymentMethod, error } = await createPaymentMethod(
            order.cardholderFullName,
        );

        if (error)
            throw new CheckoutError(
                'Order could not be submitted due to an issue with our payment system. Please try again later.',
                'PaymentMethodError',
            );

        const response = await fetch(`${BASE_SERVER_URL}/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_details: order,
                payment_method_id: paymentMethod?.id,
                user_id: userId,
            }),
        });

        const data = await response.json();

        if (response.ok && data.status === 'success') return data;
        else
            throw new CheckoutError(data.message, data.errorCode, data.details);
    };

    const handleError = (error) => {
        if (!(error instanceof CheckoutError)) {
            toast.error(
                'Order could not be submitted. Please try again later.',
            );
        } else if (
            error.errorCode === 'OrderUpdateError' ||
            error.errorCode === 'OrderItemsError'
        ) {
            showMessage('error-message');
        } else {
            toast.error(error.message);
        }
    };

    const {
        isLoading: isCheckingOut,
        isSuccess,
        error,
        data,
        mutate: checkout,
    } = useMutation({
        mutationFn: checkoutApi,

        onSuccess: () => scrollToTop(),
        onError: (error) => handleError(error),
    });

    return {
        isCheckingOut,
        isSuccess,
        error,
        order: data?.data,
        checkout,
    };
}
