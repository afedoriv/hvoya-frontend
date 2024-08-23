import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import List from './List';
import ListItem from './ListItem';
import { isEqual as isSelected } from '../utils/helpers/helpers';

function Filter({ options, filterField = 'category', styles }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedFilter = searchParams.get(filterField) || options[0].value;

    function handleClick(filterValue) {
        searchParams.set(filterField, filterValue);
        if (filterField === 'category') searchParams.set('page', 1);
        setSearchParams(searchParams);
    }

    return (
        <List
            styles={styles.container}
            list={options}
            render={({ label, value }) => (
                <ListItem key={`${filterField}-${value}`}>
                    <Button
                        styles={
                            isSelected(value, selectedFilter)
                                ? styles.selected
                                : styles.regular
                        }
                        onClick={() => handleClick(value)}
                        disabled={isSelected(value, selectedFilter)}
                    >
                        {label}
                    </Button>
                </ListItem>
            )}
        />
    );
}

export default Filter;
