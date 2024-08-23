import { useEffect } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import Box from '../../ui/Box';
import { useCardElementOptions } from './useCardElementOptions';
import { useInputFocusState } from '../../hooks/useInputFocusState';
import { useStripeHelpers } from './useStripeHelpers';

const commonStyles =
    'mb-8 h-12 w-full cursor-text border border-studio-300 px-3 py-4 transition-all ease-linear 3xs:px-3.5 2xs:py-3.5 md:px-4 2xl:px-5';

function CardInput() {
    const { isFocused, handleOnBlur, handleOnFocus } = useInputFocusState();
    const cardElementOptions = useCardElementOptions();
    const { clearCardElement } = useStripeHelpers();

    const containerStyle = isFocused
        ? `${commonStyles} ring-1 ring-studio-300 ring-offset-1`
        : commonStyles;

    useEffect(() => {
        return () => clearCardElement();
    }, []);

    return (
        <Box styles={containerStyle}>
            <CardElement
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                options={cardElementOptions}
            />
        </Box>
    );
}

export default CardInput;
