import { TfiMinus, TfiPlus } from 'react-icons/tfi';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Quantity from './Quantity';
import { MAX_QTY_PER_ORDER } from '../../utils/constants/constants';

const primaryStyles = {
    container:
        'col-span-1 me-auto flex sm:col-start-2 sm:row-span-1 sm:row-start-6',
    button: 'flex aspect-square w-9 cursor-pointer items-center justify-center border border-studio-200 text-xs text-stone-900 transition-colors duration-200 ease-linear hover:text-studio-200 focus:border-stone-800 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-not-allowed disabled:text-stone-500 3xs:w-10 3xs:text-sm 2xl:w-12 2xl:text-base',
};
const secondaryStyles = {
    container:
        'col-span-1 col-start-1 row-span-1 row-start-4 flex self-center justify-self-start 2xs:col-span-1 2xs:col-start-2 2xs:row-span-1 2xs:row-start-3 2xs:self-center 2xs:justify-self-start sm:col-span-1 sm:col-start-3 sm:row-span-1 sm:row-start-1 sm:justify-self-center xl:col-span-1 xl:col-start-2 xl:row-span-1 xl:row-start-3 xl:self-center xl:justify-self-start 2xl:col-span-1 2xl:col-start-3 2xl:row-span-1 2xl:row-start-1 2xl:justify-self-center',
    button: 'flex aspect-square w-9 cursor-pointer items-center justify-center border border-studio-300 text-xs text-stone-900 transition-colors duration-200 ease-linear hover:text-studio-300 focus:border-stone-800 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-not-allowed disabled:text-stone-600 3xs:w-10 3xs:text-sm',
};

function ProductQtyControl({
    availableQty,
    selectedQty,
    onDecrease,
    onIncrease,
    disabled = false,
    type = 'product',
}) {
    const maximumQty =
        selectedQty === availableQty || selectedQty === MAX_QTY_PER_ORDER;
    const minimumQty = selectedQty === 1;
    const soldOut = availableQty === 0;

    const styles = type === 'product' ? primaryStyles : secondaryStyles;

    return (
        <Box styles={styles.container}>
            <Button
                styles={styles.button}
                onClick={onDecrease}
                disabled={minimumQty || soldOut || disabled}
            >
                <TfiMinus />
            </Button>

            <Quantity quantity={selectedQty} type={type} />

            <Button
                styles={styles.button}
                onClick={onIncrease}
                disabled={maximumQty || soldOut || disabled}
            >
                <TfiPlus />
            </Button>
        </Box>
    );
}

export default ProductQtyControl;
