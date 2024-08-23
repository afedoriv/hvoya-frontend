import Box from '../../ui/Box';

const primaryStyles = {
    container:
        'relative flex aspect-square w-9 items-center justify-center border-y border-studio-200 font-sans text-xs font-light text-stone-800 3xs:w-10 3xs:text-sm 2xl:w-12 2xl:text-base',
    span: 'absolute -top-3 rounded-full bg-studio-100 p-0.5 font-sans text-[11px] font-light tracking-wide text-stone-800 3xs:text-xs 2xl:-top-3.5 2xl:text-sm',
};
const secondaryStyles = {
    container:
        'relative flex aspect-square w-9 items-center justify-center border-y border-studio-300 font-sans text-xs font-light text-stone-800 3xs:w-10 3xs:text-sm',
    span: 'absolute -top-3 rounded-full bg-studio-100 p-0.5 font-sans text-[11px] font-light tracking-wide text-stone-800 3xs:text-xs 2xl:-top-3.5',
};

function Quantity({ quantity, type = 'product' }) {
    const styles = type === 'product' ? primaryStyles : secondaryStyles;

    return (
        <Box styles={styles.container}>
            <span className={styles.span}>Qty</span>
            <span>{quantity}</span>
        </Box>
    );
}

export default Quantity;
