import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import { useProducts } from '../shop/useProducts';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';
import { RESULTS_PER_PAGE } from '../../utils/constants/constants';

const styles = {
    container:
        'my-14 flex flex-col items-center space-y-1.5 2xs:space-y-2 xs:space-y-1 sm:my-20 md:col-span-2 md:my-16 md:flex-row md:justify-between md:space-y-0 xl:my-20 3xl:col-span-1 3xl:col-start-2',
    button: 'flex cursor-pointer items-center space-x-0.5 p-1.5 font-nunito text-sm font-medium uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-900 disabled:pointer-events-none disabled:cursor-default disabled:text-stone-600 3xs:py-2 3xs:font-semibold 3xs:tracking-widest xs:px-2 xs:font-bold sm:space-x-1 md:py-2.5 lg:font-extrabold xl:px-3 xl:py-2 xl:text-base xl:font-bold',
    text: 'px-1 font-sans text-sm font-normal text-studio-300 xs:text-base 3xl:text-lg',
};

function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoadingProducts, count } = useProducts();
    const { resetScroll, scrollToTop } = useContext(ScrollControlContext);

    const pageCount = Math.ceil(count / RESULTS_PER_PAGE);

    const page = searchParams.get('page');
    const currentPage = page ? Number(page) : 1;
    const firstPage = currentPage === 1;
    const lastPage = currentPage === pageCount;

    function nextPage() {
        const nextPage = lastPage ? currentPage : currentPage + 1;
        searchParams.set('page', nextPage);
        setSearchParams(searchParams);
        scrollToTop();
    }

    function previousPage() {
        const previousPage = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set('page', previousPage);
        setSearchParams(searchParams);
        scrollToTop();
    }

    useEffect(() => {
        return () => resetScroll();
    }, []);

    return (
        <Box styles={styles.container}>
            <p className="whitespace-nowrap font-nunito text-sm font-extralight tracking-wide text-stone-900 3xs:font-light xs:text-base 3xl:text-lg">
                Showing
                <span className={styles.text}>
                    {(currentPage - 1) * RESULTS_PER_PAGE + 1}
                </span>
                to
                <span className={styles.text}>
                    {lastPage ? count : currentPage * RESULTS_PER_PAGE}
                </span>
                of
                <span className={styles.text}>{count}</span>
                results
            </p>

            <Box styles="flex space-x-3 xs:space-x-6 md:space-x-3 xl:space-x-1">
                <Button
                    styles={styles.button}
                    onClick={previousPage}
                    disabled={isLoadingProducts || firstPage}
                >
                    <TfiAngleLeft className="text-studio-300" />
                    <span>Previous</span>
                </Button>

                <Button
                    styles={styles.button}
                    onClick={nextPage}
                    disabled={isLoadingProducts || lastPage}
                >
                    <span>Next</span>
                    <TfiAngleRight className="text-studio-300" />
                </Button>
            </Box>
        </Box>
    );
}

export default Pagination;
