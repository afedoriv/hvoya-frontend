import Box from './Box';
import Button from './Button';

function FormControl({
    resetLabel = 'Cancel',
    submitLabel = 'Save',
    styles,
    onReset,
    disabled,
}) {
    return (
        <Box styles={styles.container}>
            <Button
                type="reset"
                styles={styles.resetButton}
                onClick={onReset}
                disabled={disabled}
            >
                {resetLabel}
            </Button>

            <Button
                type="submit"
                styles={styles.submitButton}
                disabled={disabled}
            >
                {submitLabel}
            </Button>
        </Box>
    );
}

export default FormControl;
