import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateUser as updateUserApi } from '../../services/apiAuth';
import { PATHS } from '../../utils/constants/routes';

export function useUpdateUser() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isLoading: isUpdatingUser, mutate: updateUser } = useMutation({
        mutationFn: updateUserApi,

        onSuccess: (user) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate(PATHS.ACCOUNT);
            toast.success('Account details successfully updated!');
        },

        onError: (err) => toast.error(err.message),
    });

    return { isUpdatingUser, updateUser };
}
