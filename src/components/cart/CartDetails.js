import { useSelector } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import ClearCart from './ClearCart';
import EmptyCart from './EmptyCart';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import OrderSummary from '../orderSummary/OrderSummary';
import { getCart, getTotalQty } from '../../store/cartSelectors';

function CartDetails() {
    const cart = useSelector(getCart);
    const totalQty = useSelector(getTotalQty);

    if (!totalQty) return <EmptyCart />;

    const cartItemQty =
        totalQty === 1 ? `${totalQty} item` : `${totalQty} items`;

    return (
        <>
            <Heading
                title={`Shopping Bag: ${cartItemQty}`}
                styles="col-span-full col-start-1 my-2.5 justify-self-center font-nunito text-[15.5px] font-bold uppercase tracking-wider text-stone-900 4xs:my-3.5 4xs:text-base 3xs:text-lg 2xs:my-4 2xs:justify-self-start xs:text-xl sm:my-5 md:mb-7 xl:row-span-1 xl:row-start-1 xl:mt-6 xl:text-[22px] 3xl:text-2xl"
            />

            <List
                list={cart}
                styles="col-span-1 col-start-1 xl:row-span-1 xl:row-start-2"
                render={(product) => (
                    <CartItem
                        product={product}
                        key={`cart-item-${product.productId}`}
                    />
                )}
            />

            <ClearCart />

            <OrderSummary />
        </>
    );
}

export default CartDetails;
