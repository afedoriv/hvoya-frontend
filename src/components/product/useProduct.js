import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usePath } from '../../hooks/usePath';
import { getProduct } from '../../services/apiProduct';
import { getProductPath } from '../../utils/helpers/location';

export function useProduct() {
    const { id } = useParams();
    const { pathMatches } = usePath();

    const enabled = pathMatches(getProductPath(id));

    const {
        isLoading: isLoadingProduct,
        data: product,
        error,
    } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id),
        retry: false,
        enabled: enabled,
    });

    return {
        isLoadingProduct,
        error,
        product,
    };
}
