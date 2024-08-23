import { useSelector } from 'react-redux';
import CartDetails from './CartDetails';
import Loader from '../../ui/Loader';
import { getLoadingState } from '../../store/cartSelectors';

function Cart() {
    const isLoadingCart = useSelector(getLoadingState);

    return (
        <main className="padding-inline main-section grid min-h-[290px] grid-cols-[1fr] pb-10 4xs:min-h-[320px] 3xs:min-h-[360px] 2xs:min-h-[420px] 2xs:pb-12 xs:pb-20 sm:min-h-[435px] md:min-h-[450px] lg:min-h-[480px] lg:pb-24 xl:min-h-[500px] xl:grid-cols-[5fr_4fr] xl:grid-rows-[auto_auto_1fr] xl:gap-x-8 2xl:min-h-[540px] 2xl:grid-cols-[4fr_3fr] 2xl:gap-x-12 3xl:gap-x-16">
            {isLoadingCart ? <Loader /> : <CartDetails />}
        </main>
    );
}

export default Cart;
