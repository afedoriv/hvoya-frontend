import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addCartItem as addCartItemApi } from '../../services/apiCartItem';

export function useAddCartItem() {
    const { isLoading: isAddingCartItem, mutate: addCartItem } = useMutation({
        mutationFn: addCartItemApi,

        onError: (err) => toast.error(err.message),
    });

    return { isAddingCartItem, addCartItem };
}
