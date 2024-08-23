import Box from '../../ui/Box';
import Filter from '../../ui/Filter';
import Sort from '../../ui/Sort';
import { useFAQs } from './useFAQs';
import { getOptions, getUniqueValues } from '../../utils/helpers/helpers';

const filterStyles = {
    container:
        'flex w-full flex-col gap-0.5 px-0.5 3xs:gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 lg:gap-1.5 lg:px-0 lg:pt-0.5 xl:gap-y-2 xl:pt-0 2xl:flex-1 2xl:flex-nowrap 2xl:justify-evenly',
    selected:
        'w-full cursor-pointer whitespace-nowrap bg-studio-100 p-2 font-nunito text-[13.5px] font-normal capitalize tracking-wide text-studio-600 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:cursor-default 3xs:text-sm 2xs:text-[14.5px] xs:text-[15px] sm:px-3.5 sm:text-[15.5px] md:px-4 md:tracking-wider lg:px-2.5 xl:text-base 2xl:px-4 2xl:text-[16.5px]',
    regular:
        'w-full cursor-pointer whitespace-nowrap bg-studio-100 p-2 font-nunito text-[13.5px] font-normal capitalize tracking-wide text-stone-700 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:cursor-default 3xs:text-sm 2xs:text-[14.5px] xs:text-[15px] sm:px-3.5 sm:text-[15.5px] md:px-4 md:tracking-wider lg:px-2.5 xl:text-base 2xl:px-4 2xl:text-[16.5px]',
};

const sortingOptions = [
    { label: 'question number (lowest)', value: 'number-ascending' },
    { label: 'question number (highest)', value: 'number-descending' },
    { label: 'question (a - z)', value: 'question-ascending' },
    { label: 'question (z - a)', value: 'question-descending' },
];

function FAQOperations() {
    const { faqs } = useFAQs();

    const subjects = getUniqueValues(faqs);
    const filterOptions = getOptions(subjects, 'all');

    return (
        <Box styles="mb-11 mt-10 flex w-full flex-col items-center gap-1.5 3xs:w-56 3xs:gap-2 2xs:w-60 sm:my-16 sm:w-[580px] sm:gap-4 sm:py-2 md:my-20 md:w-[635px] md:py-0 lg:w-[753px] lg:flex-row lg:items-start lg:gap-3 lg:pt-1.5 xl:w-[776px] 2xl:w-full 2xl:min-w-[1054px] 2xl:flex-wrap 2xl:gap-x-2 2xl:gap-y-4 2xl:pt-0">
            <Filter
                options={filterOptions}
                filterField="subject"
                styles={filterStyles}
            />

            <Sort
                options={sortingOptions}
                styles="w-full cursor-pointer whitespace-nowrap rounded-sm border border-stone-500 bg-studio-100 p-2 text-center font-nunito text-[13.5px] font-normal capitalize tracking-wide text-studio-600 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:cursor-not-allowed 3xs:text-sm 2xs:text-[14.5px] xs:text-[15px] sm:w-fit sm:text-[15.5px] md:tracking-wider xl:text-base 2xl:ms-auto 2xl:px-2.5 2xl:text-[16.5px]"
            />
        </Box>
    );
}

export default FAQOperations;
