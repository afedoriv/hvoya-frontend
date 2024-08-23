import { useSelector } from 'react-redux';
import Box from '../../ui/Box';
import EstimatedTotal from '../../ui/EstimatedTotal';
import { estimateSavings, estimateSubtotal } from '../../store/cartSelectors';
import { SHIPPING_FEE } from '../../utils/constants/constants';

const primaryStyles = {
    container: 'flex justify-between space-x-2',
    text: 'font-sans text-[11.5px] font-normal tracking-wider text-stone-900 3xs:text-[12.5px] 2xs:text-[13px] xl:font-medium 2xl:text-sm',
    number: 'font-sans text-[11.5px] font-normal tracking-wider text-stone-900 3xs:text-[12.5px] 2xs:text-[13px] xl:font-medium 2xl:text-sm',
};
const secondaryStyles = {
    container: 'flex justify-between space-x-2',
    text: 'font-sans text-[11.5px] font-light tracking-wider text-stone-900 3xs:text-[12.5px] 2xs:text-[13px]',
    number: 'font-sans text-[11.5px] font-light tracking-wider text-stone-900 3xs:text-[12.5px] 2xs:text-[13px]',
};

function OrderEstimates() {
    const savings = useSelector(estimateSavings);
    const subtotal = useSelector(estimateSubtotal);

    const displaySavings = savings !== 0;

    return (
        <Box styles="flex flex-col space-y-2.5 border-y border-studio-300 py-4 3xs:space-y-2 2xl:py-5">
            {displaySavings && (
                <EstimatedTotal
                    description="Estimated Savings"
                    amount={savings}
                    styles={primaryStyles}
                />
            )}

            <EstimatedTotal
                description="Subtotal"
                amount={subtotal}
                styles={secondaryStyles}
            />

            <EstimatedTotal
                description="Shipping"
                amount={SHIPPING_FEE}
                styles={secondaryStyles}
            />
        </Box>
    );
}

export default OrderEstimates;
