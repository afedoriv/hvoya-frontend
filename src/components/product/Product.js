import BackButton from '../../ui/BackButton';
import Loader from '../../ui/Loader';
import ProductInfo from './ProductInfo';
import { useProduct } from './useProduct';
import { PATHS } from '../../utils/constants/routes';

function Product() {
    const { isLoadingProduct } = useProduct();

    return (
        <main className="padding-inline main-section grid min-h-[272px] grid-cols-[1fr] pb-14 3xs:min-h-[252px] xs:min-h-[256px] sm:min-h-[296px] sm:grid-cols-[1fr_1fr] sm:grid-rows-[auto_auto_auto_auto_auto_auto_auto_1fr] sm:gap-x-6 sm:pb-20 md:min-h-[300px] lg:min-h-[304px] lg:gap-x-12 xl:min-h-[336px] xl:gap-x-16 xl:pb-24 2xl:min-h-[380px] 2xl:gap-x-20">
            <BackButton
                defaultPath={PATHS.SHOP}
                styles="col-span-1 mb-3 me-auto mt-1 flex cursor-pointer items-center space-x-0.5 py-1.5 pe-3 ps-2 font-nunito text-sm font-light uppercase tracking-wider text-stone-800 transition-colors duration-200 ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-800 3xs:mb-4 3xs:mt-2 3xs:pe-3.5 3xs:text-base sm:col-span-full sm:col-start-1 sm:row-span-1 sm:row-start-1 sm:mb-6 lg:space-x-1 lg:py-2 lg:pe-4 lg:ps-2.5 2xl:ps-2 2xl:text-lg"
            />

            {isLoadingProduct ? <Loader /> : <ProductInfo />}
        </main>
    );
}

export default Product;
