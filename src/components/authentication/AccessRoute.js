import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader';
import { usePath } from '../../hooks/usePath';
import { useUser } from './useUser';
import { PATHS } from '../../utils/constants/routes';

function AccessRoute() {
    const navigate = useNavigate();
    const { previousPath, prevPathMatches } = usePath();
    const { isLoadingUser, isFetching, isAuthenticated } = useUser();

    const pathname = prevPathMatches(PATHS.CART) ? previousPath : PATHS.ACCOUNT;

    useEffect(() => {
        if (isAuthenticated) {
            navigate(pathname, { replace: true });
        }
    }, [isLoadingUser, isFetching, isAuthenticated, navigate]);

    if (isLoadingUser || isFetching) return <Loader />;

    if (!isLoadingUser && !isFetching && !isAuthenticated) return <Outlet />;
}

export default AccessRoute;
