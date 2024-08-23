import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { clearCart } from '../../store/cartSlice';

export function useLogout() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const { isLoading: isLoggingOut, mutate: logout } = useMutation({
        mutationFn: logoutApi,

        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            queryClient.removeQueries();

            dispatch(clearCart());
        },
    });

    return { isLoggingOut, logout };
}
