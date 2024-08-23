import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function Sort({ options, styles }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedOption = searchParams.get('sortBy') || '';

    function handleChange(e) {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select
            styles={styles}
            options={options}
            defaultOption={selectedOption}
            onChange={handleChange}
        />
    );
}

export default Sort;
