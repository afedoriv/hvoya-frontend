import { formatCurrency } from '../utils/helpers/helpers';

function Currency({ amount, styles }) {
    return <span className={styles}>{formatCurrency(amount)}</span>;
}

export default Currency;
