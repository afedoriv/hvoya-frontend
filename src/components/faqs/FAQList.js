import { useSearchParams } from 'react-router-dom';
import ExpandableList from '../../ui/ExpandableList';
import FAQ from './FAQ';
import FAQOperations from './FAQOperations';
import { useFAQs } from './useFAQs';
import {
    filterList,
    formatString,
    sortList,
} from '../../utils/helpers/helpers';
import { MAX_QUESTION_COUNT } from '../../utils/constants/constants';

const listStyles = {
    container:
        'flex w-full flex-col items-center sm:max-w-[580px] md:max-w-[635px] xl:max-w-[645px] 2xl:max-w-[695px]',
    list: 'w-full',
    button: 'mt-14 w-32 cursor-pointer whitespace-nowrap border-0 py-2 text-center font-nunito text-sm font-normal uppercase tracking-wide text-stone-900 transition-all duration-200 ease-linear hover:text-studio-900 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear active:text-stone-900 2xs:mt-16 xs:w-40 xs:py-2.5 xs:text-base xs:tracking-wider sm:mt-20 sm:font-medium md:py-3 md:text-lg xl:mt-24 2xl:w-44',
};

function FAQList() {
    const [searchParams] = useSearchParams();
    const { faqs, count } = useFAQs();

    if (!count) return null;

    const filterValue = searchParams.get('subject') || 'all';
    const filteredFAQs = filterList(faqs, formatString(filterValue));

    const sortingValue = searchParams.get('sortBy') || 'number-ascending';
    const sortedFAQs = sortList(filteredFAQs, sortingValue);

    return (
        <>
            <FAQOperations />

            <ExpandableList
                styles={listStyles}
                list={sortedFAQs}
                render={(question) => (
                    <FAQ faq={question} key={`faqs-li-${question.number}`} />
                )}
                maxCount={MAX_QUESTION_COUNT}
            />
        </>
    );
}

export default FAQList;
