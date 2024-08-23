import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCartItem as updateCartItemApi } from '../../services/apiCartItem';

export function useUpdateCartItem() {
    const { isLoading: isUpdatingCartItem, mutate: updateCartItem } =
        useMutation({
            mutationFn: updateCartItemApi,

            onError: (err) => toast.error(err.message),
        });

    return { isUpdatingCartItem, updateCartItem };
}
