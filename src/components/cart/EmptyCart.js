import BackButton from '../../ui/BackButton';
import Heading from '../../ui/Heading';
import { PATHS } from '../../utils/constants/routes';

function EmptyCart() {
    return (
        <>
            <BackButton
                defaultPath={PATHS.SHOP}
                styles="col-span-full col-start-1 me-auto mt-1 flex cursor-pointer items-center space-x-0.5 self-start py-1.5 pe-3 ps-2 font-nunito text-sm font-light uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-900 3xs:mt-2 3xs:pe-3.5 3xs:text-base lg:space-x-1 lg:py-2 lg:pe-4 lg:ps-2.5 xl:row-span-1 xl:row-start-1 2xl:ps-2 2xl:text-lg"
            />

            <Heading
                title="Shopping Bag Is Empty"
                styles="col-span-full col-start-1 mb-auto text-center font-nunito text-2xl font-light uppercase tracking-wide text-stone-800 xs:text-3xl xs:tracking-wider sm:font-normal md:text-4xl xl:row-span-2 xl:row-start-2 xl:mt-auto 2xl:text-5xl"
            />
        </>
    );
}

export default EmptyCart;
