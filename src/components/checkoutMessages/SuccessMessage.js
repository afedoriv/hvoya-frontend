import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import { PATHS } from '../../utils/constants/routes';

const styles = {
    container:
        'mb-6 mt-3 flex flex-col gap-y-6 4xs:mb-7 4xs:mt-4 3xs:mb-8 3xs:mt-6 3xs:gap-y-8 2xs:mb-10 2xs:mt-7 2xs:gap-y-10 xs:mt-10 sm:mx-auto sm:max-w-[600px] lg:gap-y-12 xl:max-w-[700px]',
    title: 'text-center font-nunito text-[15.5px] font-bold uppercase tracking-wider text-studio-300 4xs:text-base 3xs:text-lg xs:text-xl xl:text-[22px] 3xl:text-2xl',
    text: 'text-center font-nunito text-sm font-extralight tracking-wider text-stone-900 2xs:text-base xs:font-light 2xl:text-lg',
    button: 'mx-auto mt-2 w-52 cursor-pointer whitespace-nowrap border border-stone-900 bg-stone-900 p-3.5 text-center font-sans text-[11px] font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:bg-studio-100 hover:font-light hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-300 4xs:w-56 4xs:text-xs 3xs:w-64 3xs:text-sm sm:font-light sm:hover:font-normal sm:active:font-medium',
};

function SuccessMessage({ email }) {
    const navigate = useNavigate();

    const state = { previousPath: PATHS.CART };

    return (
        <Box styles={styles.container}>
            <Heading title="Thank you for your order!" styles={styles.title} />

            <p className={styles.text}>
                We are getting started on your order right away, and you will
                receive an order confirmation email shortly to{' '}
                <span className="font-normal xs:font-medium">{email}</span>.
            </p>

            <Button
                styles={styles.button}
                onClick={() => navigate(PATHS.ORDERS, { state })}
            >
                View Order Confirmation
            </Button>
        </Box>
    );
}

export default SuccessMessage;
