import Image from '../../ui/Image';
import Loader from '../../ui/Loader';
import Products from './Products';
import { useProducts } from './useProducts';
import { useSettings } from '../settings/useSettings';

const imageStyles = {
    figure: 'group/shop-cover z-10 mt-2 aspect-square w-full cursor-default 3xs:aspect-5/4 2xs:aspect-3/2 xs:aspect-2/1 md:aspect-3/1 xl:aspect-4/1',
    image: 'z-20 h-full w-full scale-110 object-cover transition-transform duration-300 ease-linear group-hover/shop-cover:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

function Shop() {
    const { isLoading: isLoadingSettings, shopImage } = useSettings();
    const { isLoadingProducts } = useProducts();

    const isLoading = isLoadingSettings || isLoadingProducts;

    return (
        <main className="main-section padding-inline min-h-[456px] 4xs:min-h-[480px] 3xs:min-h-[431px] 2xs:min-h-[435px] xs:min-h-[440px] sm:min-h-[532px] md:min-h-[478px] lg:min-h-[491px] xl:min-h-[466px] 2xl:min-h-[576px]">
            <Image image={shopImage} styles={imageStyles} />

            {isLoading ? <Loader /> : <Products />}
        </main>
    );
}

export default Shop;
