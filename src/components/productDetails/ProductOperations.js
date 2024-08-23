import { useEffect, useState } from 'react';
import AddProductControl from '../addProductControl/AddProductControl';
import ProductQtyControl from '../productQtyControl/ProductQtyControl';
import { useCheckout } from '../checkoutForm/useCheckout';

function ProductOperations({ addedQty, availableQty }) {
    const [quantity, setQuantity] = useState(addedQty || 1);

    const { isCheckingOut } = useCheckout();

    function handleDecreaseQty() {
        setQuantity(quantity - 1);
    }
    function handleIncreaseQty() {
        setQuantity(quantity + 1);
    }

    useEffect(() => {
        setQuantity(addedQty || 1);
    }, [addedQty]);

    return (
        <>
            <ProductQtyControl
                availableQty={availableQty}
                selectedQty={quantity}
                onDecrease={handleDecreaseQty}
                onIncrease={handleIncreaseQty}
                disabled={isCheckingOut}
            />

            <AddProductControl qty={quantity} />
        </>
    );
}

export default ProductOperations;
