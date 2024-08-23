import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import CartItemHeadings from './CartItemHeadings';
import EstimatedTotal from '../../ui/EstimatedTotal';
import Image from '../../ui/Image';
import Link from '../../ui/Link';
import ListItem from '../../ui/ListItem';
import ProductPrice from '../productPrice/ProductPrice';
import ProductProperties from '../productProperties/ProductProperties';
import ProductQtyControl from '../productQtyControl/ProductQtyControl';
import { useCheckout } from '../checkoutForm/useCheckout';
import { useDeleteCartItem } from './useDeleteCartItem';
import { useUpdateCartItem } from './useUpdateCartItem';
import { useUser } from '../authentication/useUser';
import { deleteProduct, updateProduct, saveCart } from '../../store/cartSlice';
import { getProductPath } from '../../utils/helpers/location';

const imageStyles = {
    figure: 'z-10 aspect-square w-full min-w-[70px] 2xs:aspect-4/5',
    image: 'z-20 h-full w-full scale-105 object-cover',
    text: 'image-alt-text text-sm 3xs:text-base 2xs:text-xs xl:text-[10px] 2xl:text-xs 3xl:text-sm',
};
const priceStyles = {
    container:
        'col-span-1 col-start-2 row-span-1 row-start-4 flex self-center justify-self-end 2xs:col-span-1 2xs:col-start-3 2xs:row-span-1 2xs:row-start-3 2xs:self-center 2xs:justify-self-end sm:col-span-1 sm:col-start-4 sm:row-span-1 sm:row-start-1 xl:col-span-1 xl:col-start-3 xl:row-span-1 xl:row-start-3 xl:self-center xl:justify-self-end 2xl:col-span-1 2xl:col-start-4 2xl:row-span-1 2xl:row-start-1',
    currentPrice:
        'font-sans text-[13px] font-medium tracking-wide text-stone-900',
    originalPrice:
        'me-1.5 font-sans text-[13px] font-light tracking-wide text-stone-900 line-through',
};
const totalPriceStyles = {
    container:
        'col-span-full col-start-1 row-span-1 row-start-5 flex space-x-1.5 self-center justify-self-start 2xs:col-span-1 2xs:col-start-2 2xs:row-span-1 2xs:row-start-4 2xs:self-center 2xs:justify-self-start sm:col-span-1 sm:col-start-4 sm:row-span-1 sm:row-start-3 sm:justify-self-end xl:col-span-1 xl:col-start-2 xl:row-span-1 xl:row-start-4 xl:self-center xl:justify-self-start 2xl:col-span-1 2xl:col-start-4 2xl:row-span-1 2xl:row-start-3 2xl:justify-self-end',
    text: 'font-sans text-[13px] font-normal tracking-wider text-stone-900',
    number: 'font-sans text-[13px] font-light tracking-wide text-stone-900',
};

function CartItem({
    product: {
        availableQty,
        color,
        collection,
        discount,
        image,
        productId,
        productQty,
        regularPrice,
        size,
        title,
        unitPrice,
    },
}) {
    const dispatch = useDispatch();

    const { isAuthenticated } = useUser();
    const { isCheckingOut } = useCheckout();
    const { isDeletingCartItem, deleteCartItem } = useDeleteCartItem();
    const { isUpdatingCartItem, updateCartItem } = useUpdateCartItem();

    const isLoading = isCheckingOut || isDeletingCartItem || isUpdatingCartItem;

    const properties = [
        { label: 'color', value: color },
        { label: 'size', value: size },
    ];
    const productDetails = { productId, collection, title };
    const totalPrice = unitPrice * productQty;
    const showTotalPrice = productQty > 1;

    function handleDelete(productId) {
        if (isAuthenticated)
            deleteCartItem(productId, {
                onSuccess: () => dispatch(deleteProduct(productId)),
            });
        else {
            dispatch(deleteProduct(productId));
            dispatch(saveCart());
        }
    }

    function handleUpdateQty(productId, productQty) {
        const newItemQty = {
            productId,
            productQty,
        };

        if (isAuthenticated)
            updateCartItem(newItemQty, {
                onSuccess: () => dispatch(updateProduct(newItemQty)),
            });
        else {
            dispatch(updateProduct(newItemQty));
            dispatch(saveCart());
        }
    }

    return (
        <ListItem styles="grid grid-cols-[1fr_1fr] grid-rows-[auto_auto_1fr_auto_1fr] gap-x-2 gap-y-3.5 border-b border-studio-300 py-3.5 first:border-t 4xs:gap-x-4 4xs:py-4 2xs:grid-cols-[1fr_auto_1fr] 2xs:grid-rows-[1fr_1fr_auto_1fr] 2xs:gap-x-5 2xs:py-5 xs:grid-cols-[1fr_2fr_1fr] xs:gap-x-6 xs:gap-y-3 xs:py-6 sm:grid-cols-[1fr_2fr_1fr_1fr] sm:grid-rows-[auto_auto_1fr] md:grid-cols-[1fr_2fr_2fr_1fr] xl:grid-cols-[1fr_2fr_1fr] xl:grid-rows-[1fr_1fr_auto_1fr] 2xl:grid-cols-[1fr_2fr_1fr_1fr] 2xl:grid-rows-[auto_auto_1fr] 3xl:grid-cols-[1fr_2fr_2fr_1fr]">
            <Link
                link={getProductPath(productId)}
                styles="col-span-full col-start-1 row-span-1 row-start-1 w-full cursor-pointer self-center justify-self-center focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear 2xs:col-span-1 2xs:col-start-1 2xs:row-span-full 2xs:row-start-1 xs:col-span-1 xs:col-start-1 xs:row-span-full xs:row-start-1 xs:self-start sm:col-span-1 sm:col-start-1 sm:row-span-full sm:row-start-1 xl:col-span-1 xl:col-start-1 xl:row-span-full xl:row-start-1 xl:self-start"
            >
                <Image image={image} styles={imageStyles} />
            </Link>

            <CartItemHeadings product={productDetails} />

            <ProductProperties properties={properties} type="cart-item" />

            <ProductQtyControl
                availableQty={availableQty}
                selectedQty={productQty}
                onDecrease={() => handleUpdateQty(productId, productQty - 1)}
                onIncrease={() => handleUpdateQty(productId, productQty + 1)}
                disabled={isLoading}
                type="cart-item"
            />

            <ProductPrice
                regularPrice={regularPrice}
                discount={discount}
                styles={priceStyles}
            />

            {showTotalPrice && (
                <EstimatedTotal
                    description={`Total:`}
                    amount={totalPrice}
                    styles={totalPriceStyles}
                />
            )}

            <Button
                styles="col-span-1 col-start-2 row-span-1 row-start-5 cursor-pointer self-center justify-self-end px-0.5 py-0.5 font-nunito text-sm font-light capitalize tracking-wide text-stone-900 underline underline-offset-2 transition-colors duration-200 ease-linear hover:text-studio-300 focus:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-not-allowed disabled:text-stone-600 2xs:col-start-3 2xs:row-start-4 sm:col-start-2 sm:row-start-3 sm:justify-self-start sm:py-1 xl:col-start-3 xl:row-start-4 xl:self-center xl:justify-self-end 2xl:col-start-2 2xl:row-start-3 2xl:justify-self-start"
                onClick={() => handleDelete(productId)}
                disabled={isLoading}
            >
                Remove
            </Button>
        </ListItem>
    );
}

export default CartItem;
