import { formatValue, toKebabCase } from '../utils/helpers/helpers';

function Fieldset({ legend, legendStyles, children }) {
    const label = toKebabCase(formatValue(legend));

    return (
        <fieldset aria-labelledby={label}>
            <legend className={legendStyles}>{legend}</legend>

            {children}
        </fieldset>
    );
}

export default Fieldset;
