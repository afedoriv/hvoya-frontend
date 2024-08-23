import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signIn as signInApi } from '../../services/apiAuth';

export function useSignIn() {
    const queryClient = useQueryClient();

    const { isLoading: isSigningIn, mutate: signIn } = useMutation({
        mutationFn: (credentials) => signInApi(credentials),

        onSuccess: (userData) => {
            queryClient.setQueryData(['user'], userData);
        },

        onError: (err) => toast.error(err.message),
    });

    return { isSigningIn, signIn };
}
