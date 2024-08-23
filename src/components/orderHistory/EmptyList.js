import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Box from '../../ui/Box';
import Text from '../../ui/Text';
import { PATHS } from '../../utils/constants/routes';

function EmptyList() {
    const navigate = useNavigate();

    return (
        <Box styles="mt-10 flex flex-col 3xs:mt-8 2xs:mt-6 xs:mt-8 sm:mt-0">
            <Text
                text="You have no orders yet."
                styles="mb-10 px-0.5 text-center font-sans text-base font-thin tracking-wider text-stone-900 3xs:mb-14 2xs:mb-16 sm:mb-7 sm:text-left"
            />

            <Button
                styles="w-full cursor-pointer whitespace-nowrap bg-studio-100 px-0.5 pb-1.5 pt-1 text-center font-sans text-base font-thin tracking-wider text-stone-900 underline underline-offset-2 transition-colors duration-200 ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:pointer-events-none 3xs:pb-2 3xs:pt-1.5 2xs:mx-auto 2xs:w-64 sm:ms-0 sm:w-fit sm:p-1.5 sm:pt-1"
                onClick={() => navigate(PATHS.SHOP)}
            >
                Start Shopping!
            </Button>
        </Box>
    );
}

export default EmptyList;
