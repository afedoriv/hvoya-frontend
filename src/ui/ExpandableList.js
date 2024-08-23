import Box from './Box';
import Button from './Button';
import { useOpenState } from '../hooks/useOpenState';

function ExpandableList({ list, render, maxCount, styles }) {
    const [isOpen, toggleOpen] = useOpenState();

    const count = list.length;

    const items = isOpen ? list : list.slice(0, maxCount);
    const displayButton = count > maxCount;

    return (
        <Box styles={styles.container}>
            <ul className={styles.list}>{items.map(render)}</ul>

            {displayButton && (
                <Button styles={styles.button} onClick={toggleOpen}>
                    {isOpen ? 'Show Less' : `Show All (${count})`}
                </Button>
            )}
        </Box>
    );
}

export default ExpandableList;
