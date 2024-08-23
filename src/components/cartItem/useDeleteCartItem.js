import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCartItem as deleteCartItemApi } from '../../services/apiCartItem';

export function useDeleteCartItem() {
    const { isLoading: isDeletingCartItem, mutate: deleteCartItem } =
        useMutation({
            mutationFn: deleteCartItemApi,

            onError: (err) => toast.error(err.message),
        });

    return { isDeletingCartItem, deleteCartItem };
}
