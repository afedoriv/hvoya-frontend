import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import OrderItemProducts from './OrderItemProducts';
import { formatOrderItem } from '../../utils/helpers/order';

const styles = {
    list: 'col-span-1 col-start-1 flex flex-col gap-y-1 2xs:gap-y-1.5',
    listItem:
        'whitespace-nowrap font-sans text-[13px] font-extralight tracking-wider text-stone-900 first:font-normal last:font-normal last:capitalize lg:text-[13.5px] 2xl:text-[14px]',
    span: 'flex px-0.5 2xl:px-1',
};

function OrderItem({ order }) {
    const orderDetails = formatOrderItem(order);

    return (
        <ListItem styles="grid grid-cols-[1fr_1fr] h-fit items-center gap-x-2 border-b border-studio-200 py-3.5 last:border-b-0 3xs:grid-cols-[2fr_3fr] 3xs:gap-x-4 3xs:py-4 2xs:grid-cols-[2fr_4fr] 2xs:py-5 xs:grid-cols-[1fr_3fr] xs:gap-x-6 sm:grid-cols-[2fr_3fr] sm:gap-x-4 sm:border-0 sm:py-0 md:grid-cols-[2fr_5fr] md:gap-x-6 xl:grid-cols-[1fr_3fr] 2xl:grid-cols-[1fr_4fr] 2xl:gap-x-7">
            <List
                styles={styles.list}
                list={orderDetails}
                render={({ text }, index) => (
                    <ListItem
                        styles={styles.listItem}
                        key={`order-item-li-${index}`}
                    >
                        <span className={styles.span}>{text}</span>
                    </ListItem>
                )}
            />

            <OrderItemProducts products={order.products} />
        </ListItem>
    );
}

export default OrderItem;
