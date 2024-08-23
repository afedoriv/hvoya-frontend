import Box from '../../ui/Box';
import Text from '../../ui/Text';
import { FREE_SHIPPING_LIMIT } from '../../utils/constants/constants';

function Promo() {
    return (
        <Box styles="bg-studio-200 py-2.5">
            <Text
                text={`Free shipping on all orders over $${FREE_SHIPPING_LIMIT}`}
                styles="whitespace-nowrap text-center font-sans text-[10.5px] font-normal tracking-widest text-stone-100 4xs:text-xs"
            />
        </Box>
    );
}

export default Promo;
