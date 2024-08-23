import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Link from '../../ui/Link';
import { getProductPath } from '../../utils/helpers/location';

function CartItemHeadings({ product: { productId, collection, title } }) {
    return (
        <Box styles="col-span-2 col-start-1 row-span-1 row-start-2 self-end justify-self-start 2xs:col-start-2 2xs:row-start-1 sm:col-span-1 sm:self-start xl:col-span-2 xl:self-end 2xl:col-span-1 2xl:self-start">
            <Heading
                title={collection}
                styles="mb-0.5 font-sans text-[13px] font-semibold capitalize tracking-wider text-stone-900 2xl:text-sm"
            />

            <Link
                link={getProductPath(productId)}
                styles="cursor-pointer py-0.5 font-sans text-[13px] font-light capitalize tracking-wider text-stone-900 underline underline-offset-2 transition-colors duration-200 ease-linear hover:text-studio-300 focus:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 3xl:text-sm"
            >
                {title}
            </Link>
        </Box>
    );
}

export default CartItemHeadings;
