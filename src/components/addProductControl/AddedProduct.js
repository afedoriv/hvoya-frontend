import { useSelector } from 'react-redux';
import AddedProductDetails from './AddedProductDetails';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import EstimatedTotal from '../../ui/EstimatedTotal';
import Text from '../../ui/Text';
import { useProduct } from '../product/useProduct';
import {
    estimateSavings,
    estimateSubtotal,
    getProductQty,
    getTotalQty,
} from '../../store/cartSelectors';

const savingsStyles = {
    container: 'mt-1 flex justify-between sm:mt-1.5 xl:mt-2 2xl:mt-2.5',
    text: 'font-nunito text-[11px] font-light tracking-wider text-stone-900 4xs:text-xs 2xs:text-sm xs:font-normal 2xl:text-base',
    number: 'font-sans text-[11px] font-normal tracking-wide text-stone-900 4xs:text-xs 2xs:text-sm 2xl:text-base',
};
const subtotalStyles = {
    container: 'flex justify-between',
    text: 'font-nunito text-xs font-extralight tracking-wider text-studio-200 4xs:text-sm 2xs:text-base xs:font-light 2xl:text-lg',
    number: 'font-sans text-xs font-normal tracking-wide text-stone-900 4xs:text-sm 2xs:text-base 2xl:text-lg',
};

function AddedProduct({ onCloseWindow }) {
    const { product } = useProduct();

    const productQty = useSelector(getProductQty(product?.productId));
    const savings = useSelector(estimateSavings);
    const subtotal = useSelector(estimateSubtotal);
    const totalQty = useSelector(getTotalQty);

    const displaySavings = savings > 0;

    return (
        <section className="flex w-full flex-col">
            <Text
                text={`Added to your bag (${productQty})`}
                styles="py-1 font-nunito text-xs font-extralight tracking-wider text-studio-200 4xs:text-sm 3xs:py-1.5 2xs:text-base xs:py-2 xs:font-light 2xl:py-2.5 2xl:text-lg"
            />

            <AddedProductDetails product={product} />

            <EstimatedTotal
                description={`Bag Order Total (${totalQty})`}
                amount={subtotal}
                styles={subtotalStyles}
            />

            {displaySavings && (
                <EstimatedTotal
                    description="Estimated Savings"
                    amount={savings}
                    styles={savingsStyles}
                />
            )}

            <ButtonPanel closeWindow={onCloseWindow} type="secondary" />
        </section>
    );
}

export default AddedProduct;
