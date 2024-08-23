import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import Box from '../../ui/Box';
import Button from '../../ui/Button';

const controlStyles = {
    container:
        'absolute bottom-4 z-20 flex w-full items-center justify-between px-4 2xs:bottom-5 2xs:px-6 xs:bottom-6 xs:justify-center xs:space-x-5 sm:bottom-7 sm:space-x-6 md:bottom-8 md:space-x-7 lg:bottom-9 lg:space-x-8 xl:bottom-10 xl:space-x-9 2xl:bottom-14 2xl:space-x-12',
    button: 'flex cursor-pointer border border-studio-100 bg-transparent p-2 transition-transform duration-200 ease-linear focus:outline-none focus:ring-2 focus:ring-studio-200 focus:ring-offset-0 focus:transition focus:ease-linear disabled:cursor-not-allowed 2xs:p-2.5 xs:p-3 md:p-3.5 2xl:p-4',
    icon: 'rounded-full bg-stone-900/50 p-2 text-sm text-studio-100 transition-colors duration-200 ease-linear 2xl:text-base',
};

function SliderControl({ onNextSlide, onPreviousSlide, disabled }) {
    return (
        <Box styles={controlStyles.container}>
            <Button
                ariaLabel="Previous"
                styles={`group/btn-previous ${controlStyles.button} hover:-translate-x-0.5`}
                onClick={onPreviousSlide}
                disabled={disabled}
            >
                <span
                    className={`${controlStyles.icon} group-hover/btn-previous:bg-stone-900/60 group-focus/btn-previous:bg-stone-900/60`}
                >
                    <TfiAngleLeft />
                </span>
            </Button>

            <Button
                ariaLabel="Next"
                styles={`group/btn-next ${controlStyles.button} hover:translate-x-0.5`}
                onClick={onNextSlide}
                disabled={disabled}
            >
                <span
                    className={`${controlStyles.icon} group-hover/btn-next:bg-stone-900/60 group-focus/btn-next:bg-stone-900/60`}
                >
                    <TfiAngleRight />
                </span>
            </Button>
        </Box>
    );
}

export default SliderControl;
