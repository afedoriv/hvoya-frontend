import Box from '../../ui/Box';
import Filter from '../../ui/Filter';
import Sort from '../../ui/Sort';
import { useSettings } from '../settings/useSettings';
import { getOptions } from '../../utils/helpers/helpers';

const filterStyles = {
    container: 'flex w-full flex-col items-start gap-0.5',
    selected:
        'cursor-pointer whitespace-nowrap px-2 py-0.5 font-nunito text-sm font-bold uppercase tracking-widest text-studio-300 transition-colors duration-200 ease-linear disabled:cursor-default 3xs:py-1 3xs:text-base xs:px-2.5 lg:py-1.5 2xl:text-lg',
    regular:
        'cursor-pointer whitespace-nowrap px-2 py-0.5 font-nunito text-sm font-semibold uppercase tracking-widest text-stone-900 transition-colors duration-200 ease-linear hover:text-stone-600 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-default 3xs:py-1 3xs:text-base xs:px-2.5 lg:py-1.5 xl:font-bold 2xl:text-lg',
};

const sortingOptions = [
    { label: 'newest', value: 'createdAt-descending' },
    { label: 'lowest price', value: 'price-ascending' },
    { label: 'highest price', value: 'price-descending' },
    { label: 'product (a - z)', value: 'title-ascending' },
    { label: 'product (z - a)', value: 'title-descending' },
];

function ShopOperations() {
    const { isLoading, categories } = useSettings();

    const filterOptions = getOptions(categories, 'all');

    return (
        <Box
            styles={`mb-14 flex w-full flex-col items-start sm:mb-20 md:col-span-1 md:col-start-1 md:mb-auto ${
                isLoading ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
        >
            <Filter options={filterOptions} styles={filterStyles} />

            <Sort
                options={sortingOptions}
                styles="mt-1 cursor-pointer whitespace-nowrap border border-studio-300 px-1 py-0.5 font-nunito text-sm font-semibold uppercase tracking-widest text-stone-900 hover:text-stone-600 focus:border-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear disabled:cursor-not-allowed 3xs:py-1 3xs:text-base xs:px-1.5 lg:py-1.5 xl:font-bold 2xl:text-lg"
            />
        </Box>
    );
}

export default ShopOperations;
