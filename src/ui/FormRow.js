import Box from './Box';
import Error from './Error';

const withCheckboxStyles = {
    container:
        'min-h-8 mb-8 flex max-h-12 flex-row-reverse items-center justify-end',
    label: 'pointer-events-none flex-1 text-left font-nunito text-sm font-extralight tracking-wider text-stone-900 2xs:text-base xs:font-light 2xl:text-lg',
};
const withLabelStyles = {
    container:
        'relative mb-4 flex w-full flex-col items-start space-y-0.5 3xs:space-y-1',
    label: 'font-nunito text-xs font-medium uppercase tracking-wide text-stone-500 2xs:text-sm 2xs:tracking-wider xs:font-semibold',
    error: 'absolute -top-0.5 right-0.5 whitespace-nowrap font-nunito text-xs font-extralight tracking-wide text-red-800 3xs:-top-1 2xs:text-sm xs:font-light',
};
const withoutLabelStyles = {
    container: 'relative mb-8 flex w-full flex-col items-start',
    error: 'absolute -top-5 right-0.5 whitespace-nowrap font-nunito text-xs font-extralight tracking-wide text-red-800 3xs:-top-6 2xs:text-sm xs:font-light',
};

function FormRow({ label, error, children }) {
    const isCheckbox = children.props.type === 'checkbox';

    const inputLabel = label ? label : children.props.placeholder;

    const styles = isCheckbox
        ? withCheckboxStyles
        : label
        ? withLabelStyles
        : withoutLabelStyles;

    const labelStyles = label ? styles.label : 'sr-only';

    return (
        <Box styles={styles.container}>
            <label htmlFor={children.props.id} className={labelStyles}>
                {inputLabel}
            </label>

            {children}

            {error && <Error styles={styles.error}>{error}</Error>}
        </Box>
    );
}

export default FormRow;
