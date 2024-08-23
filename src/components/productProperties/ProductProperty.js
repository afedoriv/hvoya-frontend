import ListItem from '../../ui/ListItem';
import { formatSize } from '../../utils/helpers/helpers';

function ProductProperty({ property: { label, value }, styles }) {
    const propertyValue = label === 'size' ? formatSize(value) : value;

    return (
        <ListItem styles={styles}>
            <span>{label}:</span>
            <span>{propertyValue}</span>
        </ListItem>
    );
}

export default ProductProperty;
