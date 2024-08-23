import Box from '../../ui/Box';
import Image from '../../ui/Image';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { BREAKPOINTS } from '../../utils/constants/ui';
import {
    MAX_ORDER_ITEM_COUNT,
    MIN_ORDER_ITEM_COUNT,
} from '../../utils/constants/constants';

const imageStyles = {
    figure: 'z-10 aspect-4/5 w-full xs:max-w-[113px]',
    image: 'z-20 h-full w-full scale-105 object-cover',
    text: 'image-alt-text text-[5.5px] 4xs:text-[6px] 3xs:text-[8px] xs:text-[12px] sm:text-[8.5px] md:text-[9px] lg:text-[9.5px] xl:text-[12px] 2xl:text-[13.5px]',
};

const breakPoints = [BREAKPOINTS.LG];

function OrderItemProducts({ products }) {
    const { screenStatus } = useScreenWidth(breakPoints);

    const count = products.length;
    const maxCount = screenStatus[breakPoints[0]]
        ? MIN_ORDER_ITEM_COUNT
        : MAX_ORDER_ITEM_COUNT;

    const remainder = count - maxCount;
    const isVisible = count > maxCount;

    const imageList = products.slice(0, maxCount).map(({ product }) => product);

    return (
        <Box styles="col-span-1 col-start-2 grid h-full w-full gap-y-2 3xs:gap-y-3 2xs:grid-cols-[5fr_2fr] 2xs:gap-x-4 xs:gap-x-6 xs:justify-self-start sm:grid-cols-[auto] sm:gap-x-0 sm:gap-y-4 md:grid-cols-[5fr_2fr] md:gap-x-6 md:gap-y-0 2xl:gap-x-7">
            <List
                styles="grid grid-cols-2 gap-x-2 3xs:gap-x-4 2xs:col-span-1 2xs:col-start-1 xs:gap-x-6 2xl:grid-cols-3 2xl:gap-x-7"
                list={imageList}
                render={({ image, productId }) => (
                    <ListItem
                        styles="aspect-4/5 w-full"
                        key={`order-item-product-li-${productId}`}
                    >
                        <Image image={image} styles={imageStyles} />
                    </ListItem>
                )}
            />

            <Box
                styles={`${
                    isVisible ? 'block' : 'hidden'
                } flex place-self-center 2xs:col-span-1 2xs:col-start-2 2xs:place-self-start 2xs:self-center sm:col-start-1 sm:place-self-center sm:self-start md:col-start-2 md:place-self-start md:self-center`}
            >
                <span className="whitespace-nowrap font-sans text-[13px] font-extralight tracking-wider text-stone-900 xs:font-light lg:text-[13.5px] lg:font-normal lg:tracking-widest 2xl:text-[14px]">
                    {`+${remainder} more`}
                </span>
            </Box>
        </Box>
    );
}

export default OrderItemProducts;
