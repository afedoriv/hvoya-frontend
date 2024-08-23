import { useQuery } from '@tanstack/react-query';
import { usePath } from '../../hooks/usePath';
import { useUser } from '../authentication/useUser';
import { getOrders } from '../../services/apiOrder';
import { PATHS } from '../../utils/constants/routes';

export function useOrders() {
    const { isAuthenticated } = useUser();
    const { pathIncludes } = usePath();

    const enabled = isAuthenticated && pathIncludes(PATHS.ACCOUNT);

    const {
        isLoading: isLoadingOrders,
        data: orders,
        error,
    } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
        enabled: enabled,
    });

    return {
        isLoadingOrders,
        error,
        orders,
    };
}
