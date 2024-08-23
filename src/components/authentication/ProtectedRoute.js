import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader';
import { usePath } from '../../hooks/usePath';
import { useUser } from './useUser';
import { PATHS } from '../../utils/constants/routes';

function ProtectedRoute() {
    const navigate = useNavigate();
    const { previousPath } = usePath();
    const { isLoadingUser, isFetching, isAuthenticated } = useUser();

    const state = previousPath ? { previousPath } : null;

    useEffect(() => {
        if (!isLoadingUser && !isFetching && !isAuthenticated) {
            navigate(PATHS.LOGIN, { replace: true, state });
        }
    }, [isLoadingUser, isFetching, isAuthenticated]);

    if (isLoadingUser) return <Loader />;

    if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
