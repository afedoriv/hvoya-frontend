import Heading from '../../ui/Heading';
import Loader from '../../ui/Loader';
import OrderList from './OrderList';
import { useOrders } from './useOrders';

function OrderHistory() {
    const { isLoadingOrders } = useOrders();

    return (
        <>
            <Heading
                title="Order History"
                styles="mb-3 px-0.5 text-center font-sans text-lg font-thin capitalize tracking-wider text-stone-900 3xs:mb-3.5 3xs:text-xl xs:mb-5 sm:mb-3 sm:pb-2.5 sm:text-left sm:font-nunito sm:text-2xl sm:uppercase xl:mb-5 xl:mt-1 2xl:mt-2"
            />

            {isLoadingOrders ? <Loader /> : <OrderList />}
        </>
    );
}

export default OrderHistory;
