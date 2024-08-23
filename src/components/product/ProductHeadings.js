import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import { useProduct } from './useProduct';

function ProductHeadings() {
    const {
        product: {
            category,
            collection: { collection },
            soldOut,
        },
    } = useProduct();

    const subtitle = soldOut ? 'sold out' : category;

    return (
        <Box styles="col-span-1 mb-4 2xs:mb-5 sm:col-start-2 sm:row-span-1 sm:row-start-2 sm:mb-0">
            <Heading
                title={`${collection} collection`}
                styles="mb-2 border-b border-studio-200 pb-2 ps-0.5 text-center font-sans text-lg font-thin capitalize tracking-wider text-stone-800 3xs:mb-2.5 3xs:pb-2.5 3xs:text-xl sm:text-left 2xl:text-2xl"
            />

            <Text
                text={subtitle}
                styles="pe-0.5 text-right font-sans text-base font-thin capitalize tracking-wider text-stone-800 3xs:text-lg 2xl:text-xl"
            />
        </Box>
    );
}

export default ProductHeadings;
