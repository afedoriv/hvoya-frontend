import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiAuth';

export function useUser() {
    const {
        isLoading: isLoadingUser,
        data: user,
        error,
        fetchStatus,
    } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    const isAuthenticated = useMemo(
        () => user?.role === 'authenticated',
        [user],
    );

    return {
        isLoadingUser,
        isFetching: fetchStatus === 'fetching',
        isAuthenticated,
        user: user?.user_metadata,
    };
}
