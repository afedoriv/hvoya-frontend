import EmptyList from './EmptyList';
import ExpandableList from '../../ui/ExpandableList';
import OrderItem from '../orderItem/OrderItem';
import { useOrders } from './useOrders';
import { MAX_ORDER_COUNT } from '../../utils/constants/constants';

const listStyles = {
    container: 'flex flex-col',
    list: 'flex flex-col sm:gap-y-7 lg:gap-y-8',
    button: 'mx-auto mt-4 w-28 cursor-pointer whitespace-nowrap py-1.5 text-center font-sans text-[15.7px] font-thin capitalize tracking-wider text-stone-900 transition-all duration-200 ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-900 3xs:w-32 3xs:text-[17.5px] 3xs:focus:ring-offset-1 2xs:mt-6 xs:mt-12 sm:ms-0 sm:mt-7 sm:w-[132px] sm:px-1 sm:py-2 sm:font-nunito sm:text-[16px] sm:font-light sm:uppercase xl:mt-9',
};

function OrderList() {
    const { orders } = useOrders();

    if (!orders.length) return <EmptyList />;

    return (
        <ExpandableList
            styles={listStyles}
            list={orders}
            render={(order) => (
                <OrderItem order={order} key={`order-item-${order.number}`} />
            )}
            maxCount={MAX_ORDER_COUNT}
        />
    );
}

export default OrderList;
