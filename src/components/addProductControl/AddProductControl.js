import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddedProduct from './AddedProduct';
import Button from '../../ui/Button';
import { useAddCartItem } from './useAddCartItem';
import { useCheckout } from '../checkoutForm/useCheckout';
import { useProduct } from '../product/useProduct';
import { useUpdateCartItem } from '../cartItem/useUpdateCartItem';
import { useUser } from '../authentication/useUser';
import { ModalProvider } from '../../contexts/ModalContext';
import { addProduct, updateProduct, saveCart } from '../../store/cartSlice';
import { getProductQty } from '../../store/cartSelectors';
import { formatCartItem } from '../../utils/helpers/cart';

const modalWindowStyles = {
    container:
        'absolute -right-0 bottom-0 top-0 z-50 w-full bg-studio-100 px-2 py-6 4xs:px-4 4xs:py-10 2xs:px-6 xs:px-10 sm:w-[90%] sm:px-12 md:w-[75%] md:px-14 lg:w-[65%] xl:w-[58%] xl:px-16 2xl:w-[48%] 2xl:py-12 3xl:w-[40%] 3xl:px-20',
    button: 'absolute right-2 top-6 z-50 cursor-pointer p-1.5 text-xs text-stone-900 transition ease-linear hover:text-stone-500 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-200 disabled:cursor-default disabled:text-stone-500 disabled:hover:text-stone-400 4xs:right-4 4xs:top-10 4xs:text-base 3xs:p-2 2xs:right-6 2xs:p-2.5 xs:right-10 xs:p-3 sm:right-12 md:right-14 xl:right-16 2xl:top-12 2xl:p-3.5 2xl:text-lg 3xl:right-20',
};

function AddProductControl({ qty }) {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const { product } = useProduct();
    const { isLoadingUser, isAuthenticated, user } = useUser();
    const { isAddingCartItem, addCartItem } = useAddCartItem();
    const { isUpdatingCartItem, updateCartItem } = useUpdateCartItem();
    const { isCheckingOut } = useCheckout();

    const productQty = useSelector(getProductQty(product?.productId));
    const isLoading =
        isLoadingUser ||
        isAddingCartItem ||
        isUpdatingCartItem ||
        isCheckingOut;

    const showConfirmation = () => setIsOpen(true);

    function handleAddProduct(newItem) {
        const newProduct = formatCartItem(product, newItem);

        if (isAuthenticated) {
            addCartItem(
                { ...newItem, userId: user?.sub },
                {
                    onSuccess: () => {
                        dispatch(addProduct(newProduct));
                        showConfirmation();
                    },
                },
            );
        } else {
            dispatch(addProduct(newProduct));
            dispatch(saveCart());
            showConfirmation();
        }
    }

    function handleUpdateQty(productQty) {
        if (isAuthenticated)
            updateCartItem(productQty, {
                onSuccess: () => {
                    dispatch(updateProduct(productQty));
                    showConfirmation();
                },
            });
        else {
            dispatch(updateProduct(productQty));
            dispatch(saveCart());
            showConfirmation();
        }
    }

    function handleClick() {
        setIsOpen(false);

        const newProduct = {
            productId: product?.productId,
            productQty: qty,
        };

        if (productQty) {
            handleUpdateQty(newProduct);
        } else {
            handleAddProduct(newProduct);
        }
    }

    return (
        <>
            <ModalProvider.Open window="cart-item">
                <Button
                    styles="col-span-1 mb-12 me-auto mt-5 w-36 cursor-pointer border-2 border-stone-800 bg-stone-800 py-3.5 text-xs font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:border-stone-900 hover:bg-stone-900 hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-50 disabled:cursor-not-allowed disabled:border-stone-500 disabled:bg-stone-500 hover:disabled:text-stone-50 3xs:mb-14 3xs:mt-6 3xs:w-40 3xs:py-4 3xs:text-sm xs:mt-7 sm:col-start-2 sm:row-span-1 sm:row-start-7 sm:mb-16 sm:mt-10 md:mb-20 2xl:w-44 2xl:text-base"
                    onClick={handleClick}
                    disabled={isLoading || product?.soldOut}
                >
                    {productQty ? 'Update Bag' : 'Add To Cart'}
                </Button>
            </ModalProvider.Open>

            {isOpen && (
                <ModalProvider.Window
                    windowName="cart-item"
                    styles={modalWindowStyles}
                >
                    <AddedProduct />
                </ModalProvider.Window>
            )}
        </>
    );
}

export default AddProductControl;
