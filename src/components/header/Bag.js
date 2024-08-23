import { useSelector } from 'react-redux';
import { TfiBag } from 'react-icons/tfi';
import Link from '../../ui/Link';
import { usePath } from '../../hooks/usePath';
import { getTotalQty } from '../../store/cartSelectors';
import { PATHS } from '../../utils/constants/routes';

function Bag() {
    const { state } = usePath();
    const totalQty = useSelector(getTotalQty);

    const bagIsEmpty = totalQty === 0;

    return (
        <Link
            link={PATHS.CART}
            state={state}
            ariaLabel="Shopping Bag"
            styles="z-30 relative order-2 cursor-pointer p-4 text-lg text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 sm:order-4 4xs:me-0.5 sm:me-0 sm:ms-1 2xl:text-xl"
            activeStyles="text-studio-600"
        >
            <TfiBag />

            {!bagIsEmpty && (
                <span className="absolute left-7 top-7 flex h-5 w-5 items-center justify-center rounded-full border border-stone-300 bg-studio-100 font-sans text-[10px] font-normal text-inherit transition-all ease-linear 3xl:h-6 3xl:w-6 3xl:text-xs">
                    {totalQty}
                </span>
            )}
        </Link>
    );
}

export default Bag;
