import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export function useStripeHelpers() {
    const stripe = useStripe();
    const elements = useElements();

    const clearCardElement = () => {
        if (elements) {
            const cardElement = elements.getElement(CardElement);

            if (cardElement) cardElement.clear();
        }
    };

    const createPaymentMethod = async (fullName) => {
        if (!stripe || !elements)
            return {
                error: 'Payment processing system is currently unavailable. Please try again in a few moments.',
            };

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            card: elements.getElement(CardElement),
            type: 'card',
            billing_details: { name: fullName },
        });

        return { paymentMethod, error };
    };

    return { clearCardElement, createPaymentMethod };
}
