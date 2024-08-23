import Box from '../../ui/Box';
import Image from '../../ui/Image';
import Link from '../../ui/Link';
import { useSettings } from '../settings/useSettings';
import { addAltSrc } from '../../utils/helpers/image';
import { PATHS } from '../../utils/constants/routes';

const styles = {
    link: 'flex cursor-pointer focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear',
    figure: 'relative z-0 h-full w-full after:absolute after:z-20 after:whitespace-nowrap after:bg-studio-100/100 after:px-6 after:py-3 after:text-center after:font-sans after:text-xs after:font-light after:tracking-widest after:text-stone-900 after:transition-colors after:duration-200 after:ease-linear 3xs:after:px-7 3xs:after:py-3.5 3xs:after:text-sm 3xs:after:font-normal 2xs:after:px-6 2xs:after:py-3 2xs:after:text-xs 2xs:after:font-light xs:after:text-sm md:after:px-7 md:after:font-normal lg:after:py-3.5 xl:after:px-8 2xl:after:px-9 2xl:after:py-4 2xl:after:text-base',
    image: 'z-10 h-full w-full object-cover transition-transform duration-300 ease-linear',
    text: 'image-alt-text text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-sm md:text-base 2xl:text-lg',
};

function ShoppingCategories() {
    const { categoryImages } = useSettings();

    const bestSellerImg = addAltSrc(categoryImages[0], 0, 2);
    const newArrivalsImg = addAltSrc(categoryImages[1], 1, 2);
    const featuredImg = addAltSrc(categoryImages[2], 2, 2);
    const saleImg = addAltSrc(categoryImages[3], 3, 2);

    return (
        <Box styles="mb-10 grid aspect-1/4 w-full grid-rows-4 gap-2 2xs:mb-12 2xs:aspect-2/3 2xs:grid-cols-2 2xs:grid-rows-3 xs:mb-20 sm:aspect-3/2 sm:grid-cols-3 sm:grid-rows-2 lg:mb-24 2xl:gap-4 3xl:aspect-5/2 3xl:grid-cols-4 3xl:gap-6">
            <Link
                link={`${PATHS.SHOP}?category=best-sellers&page=1`}
                styles={`group/best-sellers ${styles.link} row-span-1 row-start-1 2xs:col-span-1 2xs:col-start-1 2xs:row-start-3 sm:row-start-1`}
            >
                <Image
                    image={bestSellerImg}
                    styles={{
                        figure: `${styles.figure} after:content-['best_sellers'] group-hover/best-sellers:after:bg-studio-100/80 group-focus/best-sellers:after:bg-studio-100/80`,
                        image: `${styles.image} scale-105 group-hover/best-sellers:scale-110 2xs:group-hover/best-sellers:scale-[1.15]`,
                        text: styles.text,
                    }}
                />
            </Link>

            <Link
                link={`${PATHS.SHOP}?category=new-arrivals&page=1`}
                styles={`group/new-arrivals ${styles.link} row-span-1 row-start-3 2xs:col-span-1 2xs:col-start-2 2xs:row-start-1`}
            >
                <Image
                    image={newArrivalsImg}
                    styles={{
                        figure: `${styles.figure} after:content-['new_arrivals'] group-hover/new-arrivals:after:bg-studio-100/80 group-focus/new-arrivals:after:bg-studio-100/80`,
                        image: `${styles.image} scale-105 group-hover/new-arrivals:scale-110 2xs:group-hover/best-sellers:scale-[1.15]`,
                        text: styles.text,
                    }}
                />
            </Link>

            <Link
                link={`${PATHS.SHOP}?category=featured&page=1`}
                styles={`group/featured ${styles.link} row-span-1 row-start-2 2xs:col-span-1 2xs:col-start-1 2xs:row-span-2 2xs:row-start-1 sm:col-start-3 3xl:col-span-2`}
            >
                <Image
                    image={featuredImg}
                    styles={{
                        figure: `${styles.figure} after:content-['featured'] group-hover/featured:after:bg-studio-100/80 group-focus/featured:after:bg-studio-100/80`,
                        image: `${styles.image} scale-105 group-hover/featured:scale-110 2xs:scale-110 2xs:group-hover/featured:scale-100 3xl:scale-105`,
                        text: styles.text,
                    }}
                />
            </Link>

            <Link
                link={`${PATHS.SHOP}?category=sale&page=1`}
                styles={`group/sale ${styles.link} row-span-1 row-start-4 2xs:col-span-1 2xs:col-start-2 2xs:row-span-2 2xs:row-start-2 sm:col-span-2 sm:col-start-1 sm:row-span-1`}
            >
                <Image
                    image={saleImg}
                    styles={{
                        figure: `${styles.figure} after:content-['sale'] group-hover/sale:after:bg-studio-100/80 group-focus/sale:after:bg-studio-100/80`,
                        image: `${styles.image} scale-105 group-hover/sale:scale-110 2xs:scale-110 2xs:group-hover/sale:scale-100`,
                        text: styles.text,
                    }}
                />
            </Link>
        </Box>
    );
}

export default ShoppingCategories;
