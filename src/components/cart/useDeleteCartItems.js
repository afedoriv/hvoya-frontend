import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCartItems as deleteCartItemsApi } from '../../services/apiCartItem';

export function useDeleteCartItems() {
    const { isLoading: isDeletingCartItems, mutate: deleteCartItems } =
        useMutation({
            mutationFn: deleteCartItemsApi,

            onError: (err) => toast.error(err.message),
        });

    return { isDeletingCartItems, deleteCartItems };
}
