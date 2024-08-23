import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePath } from '../../hooks/usePath';
import { getProducts } from '../../services/apiProduct';
import { PATHS } from '../../utils/constants/routes';
import { RESULTS_PER_PAGE } from '../../utils/constants/constants';

export function useProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { pathMatches } = usePath();
    const queryClient = useQueryClient();

    const filterValue = searchParams.get('category') || 'all';
    const currentFilter = filterValue.split('-').join(' ');

    const filter =
        !filterValue || filterValue === 'all'
            ? null
            : { field: 'category', value: currentFilter };

    const sortingOption = searchParams.get('sortBy') || 'createdAt-descending';
    const [field, direction] = sortingOption.split('-');

    const sorting = { field, direction };

    const page = searchParams.get('page')
        ? Number(searchParams.get('page'))
        : 1;

    const enabled = pathMatches(PATHS.SHOP);

    const {
        isLoading: isLoadingProducts,
        data: { data: products, count } = {},
        error,
    } = useQuery({
        queryKey: ['products', filter, sorting, page],
        queryFn: () => getProducts({ filter, sorting, page }),
        enabled: enabled,
    });

    if (error) setSearchParams({});

    const totalPages = Math.ceil(count / RESULTS_PER_PAGE);

    if (page < totalPages)
        queryClient.prefetchQuery({
            queryKey: ['products', filter, sorting, page + 1],
            queryFn: () => getProducts({ filter, sorting, page: page + 1 }),
        });

    if (page > totalPages)
        queryClient.prefetchQuery({
            queryKey: ['products', filter, sorting, page - 1],
            queryFn: () => getProducts({ filter, sorting, page: page - 1 }),
        });

    return {
        isLoadingProducts,
        error,
        products,
        count,
    };
}
