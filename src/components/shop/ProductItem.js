import Heading from '../../ui/Heading';
import Image from '../../ui/Image';
import Link from '../../ui/Link';
import ListItem from '../../ui/ListItem';
import LowStock from './LowStock';
import ProductPrice from '../productPrice/ProductPrice';
import { usePath } from '../../hooks/usePath';
import { getProductPath } from '../../utils/helpers/location';
import { LOW_STOCK_THRESHOLD } from '../../utils/constants/constants';

const imageStyles = {
    figure: 'relative z-0 aspect-4/5 w-full before:absolute before:inset-0 before:z-20 before:w-full before:bg-studio-100/0 before:transition-colors before:duration-200 before:ease-linear after:absolute after:left-1/2 after:top-1/2 after:z-30 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-studio-100 after:px-6 after:py-3.5 after:font-sans after:text-sm after:font-light after:tracking-widest after:text-studio-300 after:opacity-0 after:transition-opacity after:duration-200 after:ease-linear after:content-["VIEW"] group-hover/shop-product:before:bg-studio-100/10 group-hover/shop-product:after:opacity-100 group-focus/shop-product:ring-1 group-focus/shop-product:ring-studio-300 group-focus/shop-product:ring-offset-2 group-focus/shop-product:transition group-focus/shop-product:ease-linear group-focus/shop-product:before:bg-studio-100/10 3xs:after:text-base 2xs:after:px-5 2xs:after:text-sm xs:after:px-6 xl:after:px-7 xl:after:text-base 3xl:after:px-8 3xl:after:font-normal',
    image: 'z-10 h-full w-full object-cover',
    text: 'image-alt-text text-sm 3xs:text-base 2xs:text-sm sm:text-base md:text-sm lg:text-base 3xl:text-lg',
};
const priceStyles = {
    container: 'mt-2 flex flex-row-reverse 3xs:mt-2.5 md:mt-3',
    currentPrice:
        'font-sans text-xs font-normal tracking-wide text-stone-500 3xs:text-sm 2xs:text-xs xs:text-sm',
    originalPrice:
        'ms-1.5 font-sans text-xs font-light tracking-wide text-stone-500 line-through 3xs:text-sm 2xs:text-xs xs:text-sm',
};

function ProductItem({
    product: {
        productId,
        title,
        image,
        availableQty,
        regularPrice,
        discount,
        soldOut,
    },
}) {
    const { state } = usePath();

    const showAvailability = availableQty <= LOW_STOCK_THRESHOLD;

    return (
        <ListItem styles="flex w-full">
            <Link
                link={getProductPath(productId)}
                state={state}
                styles="group/shop-product flex w-full cursor-pointer flex-col items-center focus:outline-none"
            >
                <Image image={image} styles={imageStyles} />

                <Heading
                    title={title}
                    styles="mt-5 text-center font-nunito text-sm font-bold uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:text-stone-600 3xs:mt-6 xs:font-extrabold xl:text-base"
                />

                <ProductPrice
                    regularPrice={regularPrice}
                    discount={discount}
                    soldOut={soldOut}
                    styles={priceStyles}
                    primaryLayout={false}
                />

                {showAvailability && (
                    <LowStock stock={availableQty} soldOut={soldOut} />
                )}
            </Link>
        </ListItem>
    );
}

export default ProductItem;
