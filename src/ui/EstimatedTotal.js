import Box from './Box';
import Currency from './Currency';

function EstimatedTotal({ amount, description, styles }) {
    return (
        <Box styles={styles.container}>
            <span className={styles.text}>{description}</span>

            <Currency amount={amount} styles={styles.number} />
        </Box>
    );
}

export default EstimatedTotal;
