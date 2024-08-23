import Box from '../../ui/Box';
import Currency from '../../ui/Currency';
import { getUnitPrice } from '../../utils/helpers/cart';

function ProductPrice({
    regularPrice,
    discount,
    soldOut = false,
    styles,
    primaryLayout = true,
}) {
    const onSale = discount > 0;

    const saleItem =
        (onSale && primaryLayout) || (onSale && !soldOut && !primaryLayout);

    const unitPrice = saleItem
        ? getUnitPrice(regularPrice, discount)
        : regularPrice;

    const priceStyle =
        !primaryLayout && (onSale || soldOut)
            ? `${styles.currentPrice} text-studio-300`
            : styles.currentPrice;

    return (
        <Box styles={styles.container}>
            {saleItem && (
                <Currency amount={regularPrice} styles={styles.originalPrice} />
            )}

            <Currency amount={unitPrice} styles={priceStyle} />
        </Box>
    );
}

export default ProductPrice;
