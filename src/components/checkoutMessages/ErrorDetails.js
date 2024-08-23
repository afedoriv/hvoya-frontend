import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import { formatCurrency } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';
import { SECTIONS } from '../../utils/constants/ui';

const styles = {
    button: 'mt-4 cursor-pointer whitespace-nowrap bg-studio-100 p-2 text-center font-nunito text-[12.5px] font-light uppercase tracking-wide text-studio-300 underline underline-offset-2 transition-colors duration-200 ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 4xs:mt-5 4xs:text-[13px] 4xs:font-normal 3xs:p-2.5 3xs:text-[13.5px] xs:py-3',
    paragraph:
        'mb-0.5 font-sans text-[12px] font-thin text-gray-900 4xs:text-[13px] 3xs:mb-1 3xs:text-[13.5px] xs:ms-3.5 xs:text-[14px]',
    span: 'ms-1 break-all font-light xs:ms-1.5',
};

function ErrorDetails({ error, onCloseWindow }) {
    const navigate = useNavigate();

    const {
        errorCode,
        details: { order, payment },
        message,
    } = error;

    const displayTotal = errorCode === 'OrderUpdateError';
    const state = { section: SECTIONS.CONTACT };

    function handleClick() {
        onCloseWindow();
        navigate(PATHS.CONTACT, { state });
    }

    return (
        <Box styles="flex flex-col">
            <Text
                text={message}
                styles="mb-2 me-10 font-sans text-[13px] font-extralight text-studio-300 4xs:mb-4 4xs:text-[13.5px] 4xs:font-light 3xs:text-[14.5px] xs:text-[15.5px]"
            />

            <Text
                text="Please contact our support team with the following details for further assistance:"
                styles="mb-3 font-sans text-[13px] font-thin text-gray-900 4xs:mb-4 4xs:text-[13.5px] 3xs:text-[14.5px] xs:text-[15px]"
            />

            <p className={styles.paragraph}>
                Order Number:
                <span className={styles.span}>{order.id}</span>
            </p>

            <p className={styles.paragraph}>
                Payment ID:
                <span className={styles.span}>{payment.charge_id}</span>
            </p>

            {displayTotal && (
                <p className={styles.paragraph}>
                    Charge Amount:
                    <span className={styles.span}>
                        {formatCurrency(payment.charged_amount)}
                    </span>
                </p>
            )}

            <Button styles={styles.button} onClick={handleClick}>
                Get Support
            </Button>
        </Box>
    );
}

export default ErrorDetails;
