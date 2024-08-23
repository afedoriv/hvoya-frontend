import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { useCheckout } from '../checkoutForm/useCheckout';
import { useDeleteCartItems } from './useDeleteCartItems';
import { useUser } from '../authentication/useUser';
import { clearCart } from '../../store/cartSlice';

function ClearCart() {
    const dispatch = useDispatch();

    const { isLoadingUser, isAuthenticated, user } = useUser();
    const { isDeletingCartItems, deleteCartItems } = useDeleteCartItems();
    const { isCheckingOut } = useCheckout();

    const isLoading = isLoadingUser || isDeletingCartItems || isCheckingOut;

    function handleClearCart() {
        if (isAuthenticated)
            deleteCartItems(user.sub, {
                onSuccess: () => dispatch(clearCart()),
            });
        else dispatch(clearCart());
    }

    return (
        <Button
            onClick={handleClearCart}
            styles="col-span-1 col-start-1 mx-1 my-4 cursor-pointer self-start justify-self-end whitespace-nowrap bg-studio-100 px-1 py-2 font-nunito text-xs font-bold uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:text-studio-300 focus:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-not-allowed disabled:text-stone-600 4xs:my-5 4xs:py-2.5 4xs:text-[12.5px] 3xs:my-6 3xs:px-1.5 3xs:text-sm xs:text-base xl:row-span-1 xl:row-start-3 xl:mb-0 xl:justify-self-start xl:px-2 xl:text-[17px] 3xl:mt-7 3xl:text-lg"
            disabled={isLoading}
        >
            Clear Cart
        </Button>
    );
}

export default ClearCart;
