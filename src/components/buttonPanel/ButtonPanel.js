import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import { usePath } from '../../hooks/usePath';
import { useUser } from '../authentication/useUser';
import { PATHS } from '../../utils/constants/routes';

const primaryStyles = {
    color: 'studio-300',
    container:
        'flex flex-col space-y-2 2xs:space-y-2.5 xs:space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 xl:flex-col xl:space-x-0 xl:space-y-4 3xl:min-w-[435px] 3xl:space-y-6',
    button: 'mx-1 mb-6 mt-3 py-3 3xs:mb-7 3xs:py-3.5 2xs:mt-3.5 xs:mb-8 xs:mt-5 sm:mx-auto sm:mb-9 sm:mt-7 sm:px-16 md:px-20 xl:mx-0.5 xl:mb-8 xl:mt-5 3xl:mt-7',
};
const secondaryStyles = {
    color: 'studio-200',
    container:
        'mb-2 mt-6 flex flex-nowrap space-x-2 4xs:mb-6 4xs:mt-10 4xs:space-x-4 2xs:space-x-6 xl:mt-12',
    button: 'mx-auto px-5 py-3.5 sm:px-7 sm:text-sm',
};

function ButtonPanel({ closeWindow, type = 'primary' }) {
    const navigate = useNavigate();
    const { previousPath, state, prevPathIncludes } = usePath();
    const { isAuthenticated } = useUser();

    const isPrimary = type === 'primary';

    const styles = isPrimary ? primaryStyles : secondaryStyles;
    const showButton = !(isPrimary && isAuthenticated);

    const label = isPrimary
        ? `${isAuthenticated ? 'proceed' : 'sign in'} to checkout`
        : 'checkout';

    const handleButton1Click = () => {
        if (isPrimary) navigate(PATHS.SIGNUP, { state });
        else {
            closeWindow?.();
            navigate(PATHS.CART, { state });
        }
    };

    const handleButton2Click = () => {
        if (!isPrimary) closeWindow?.();

        if (isAuthenticated) navigate(PATHS.CHECKOUT);
        else
            navigate(PATHS.LOGIN, {
                state: { previousPath: PATHS.CART },
            });
    };

    const handleButton3Click = () => {
        if (isPrimary) {
            const pathname = prevPathIncludes(PATHS.SHOP)
                ? previousPath
                : PATHS.SHOP;
            navigate(pathname);
        } else closeWindow?.();
    };

    return (
        <>
            <Box styles={styles.container}>
                {showButton && (
                    <Button
                        onClick={handleButton1Click}
                        styles={`cursor-pointer font-sans text-[11px] 4xs:text-xs font-light tracking-wider text-stone-900 uppercase whitespace-nowrap text-center 3xs:text-sm sm:font-normal bg-studio-100 border border-stone-900 p-3.5 w-full transition-colors duration-200 ease-linear hover:bg-stone-900 hover:text-stone-50 hover:font-extralight sm:hover:font-light focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-${styles.color} focus:transition focus:ease-linear active:text-${styles.color} active:font-normal sm:active:font-medium`}
                    >
                        {isPrimary ? 'sign up' : 'view bag'}
                    </Button>
                )}

                <Button
                    onClick={handleButton2Click}
                    styles={`cursor-pointer font-sans text-[11px] 4xs:text-xs font-extralight tracking-wider text-stone-50 uppercase whitespace-nowrap text-center 3xs:text-sm sm:font-light bg-stone-900 border border-stone-900 p-3.5 w-full transition-colors duration-200 ease-linear hover:bg-studio-100 hover:text-stone-900 hover:font-light sm:hover:font-normal focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-${styles.color} focus:transition focus:ease-linear active:text-${styles.color} active:font-normal sm:active:font-medium`}
                >
                    {label}
                </Button>
            </Box>

            <Button
                onClick={handleButton3Click}
                styles={`cursor-pointer font-nunito text-[11px] 4xs:text-xs font-normal tracking-wider text-stone-900 uppercase whitespace-nowrap underline underline-offset-2 bg-studio-100 ${styles.button} transition-colors duration-200 ease-linear hover:text-stone-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-${styles.color} focus:transition focus:ease-linear active:text-${styles.color}`}
            >
                Continue Shopping
            </Button>
        </>
    );
}

export default ButtonPanel;
