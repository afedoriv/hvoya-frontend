import ExpandableList from '../../ui/ExpandableList';
import Image from '../../ui/Image';
import Link from '../../ui/Link';
import ListItem from '../../ui/ListItem';
import { useCollection } from './useCollection';
import { usePath } from '../../hooks/usePath';
import { getProductPath } from '../../utils/helpers/location';
import { MAX_PRODUCT_COUNT } from '../../utils/constants/constants';

const imageStyles = {
    figure: 'relative z-0 aspect-square w-full after:absolute after:inset-0 after:z-20 after:w-full after:bg-studio-100/0 after:transition-colors after:duration-200 after:ease-linear group-hover/collection-product:after:bg-studio-100/10 group-focus/collection-product:after:bg-studio-100/10',
    image: 'z-10 h-full w-full scale-105 object-cover transition-transform duration-300 ease-linear group-hover/collection-product:scale-110',
    text: 'image-alt-text text-xs 3xs:text-sm xs:text-base 2xl:text-lg',
};
const listStyles = {
    container: 'mb-16 flex flex-col items-center sm:mb-20 xl:mb-24 2xl:mb-28',
    list: 'grid w-full grid-cols-2 gap-4 2xs:gap-x-6 2xs:gap-y-6 xs:gap-y-8 md:grid-cols-3 xl:gap-x-10 2xl:gap-y-10',
    button: 'mt-14 w-32 cursor-pointer whitespace-nowrap border-0 py-2 text-center font-nunito text-sm font-normal uppercase tracking-wide text-stone-800 transition-all duration-200 ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear active:text-stone-800 2xs:mt-16 xs:w-40 xs:py-2.5 xs:text-base xs:tracking-wider sm:mt-20 sm:font-medium md:py-3 md:text-lg xl:mt-24 2xl:w-44',
};

function CollectionProducts() {
    const { products } = useCollection();
    const { state } = usePath();

    if (!products) return null;

    return (
        <ExpandableList
            styles={listStyles}
            list={products}
            render={({ productId, image }) => (
                <ListItem key={`collection-product-${productId}`}>
                    <Link
                        link={getProductPath(productId)}
                        state={state}
                        styles="group/collection-product flex cursor-pointer focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear"
                    >
                        <Image image={image} styles={imageStyles} />
                    </Link>
                </ListItem>
            )}
            maxCount={MAX_PRODUCT_COUNT}
        />
    );
}

export default CollectionProducts;
