import { useSelector } from 'react-redux';
import Box from '../../ui/Box';
import EstimatedTotal from '../../ui/EstimatedTotal';
import Text from '../../ui/Text';
import { estimateSubtotal } from '../../store/cartSelectors';
import {
    FREE_SHIPPING_LIMIT,
    SHIPPING_FEE,
} from '../../utils/constants/constants';

const styles = {
    container: 'flex items-center justify-between space-x-2 2xs:space-x-2.5',
    text: 'font-nunito text-[11.5px] font-extralight tracking-wider text-studio-300 4xs:font-light 3xs:text-[12.5px] 2xs:text-[13px] xs:text-[13.5px] xl:text-[13px] 2xl:text-[13.5px]',
    number: 'font-sans text-[11px] font-extralight tracking-wider text-studio-300 4xs:font-light 3xs:text-[12px] 2xs:text-[12.5px] xs:text-[13px] xl:text-[12.5px] 2xl:text-[13px]',
};

function FreeShippingPromo() {
    const subtotal = useSelector(estimateSubtotal);

    const isEligible = subtotal >= FREE_SHIPPING_LIMIT;

    if (!isEligible) return;

    return (
        <Box styles="flex flex-col space-y-2.5 border-studio-300 bg-stone-100 px-2 py-4 4xs:px-3.5 3xs:space-y-2 3xs:border 3xs:border-t-0 3xs:px-4 2xs:space-y-2.5 2xs:px-5 xs:py-5 xl:px-4 2xl:px-5">
            <Text
                text="Promotion automatically applied:"
                styles="font-nunito text-[13px] font-normal tracking-wider text-stone-900 3xs:text-[13.5px] 2xs:text-sm 2xs:font-medium xs:text-[15px] xl:text-[14.5px] 2xl:text-[15px]"
            />

            <EstimatedTotal
                amount={-SHIPPING_FEE}
                description={`Free shipping on orders of $${FREE_SHIPPING_LIMIT} or more.`}
                styles={styles}
            />
        </Box>
    );
}

export default FreeShippingPromo;
