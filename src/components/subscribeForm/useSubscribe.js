import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { subscribe as subscribeApi } from '../../services/apiSubscription';

export function useSubscribe() {
    const { isLoading: isSubscribing, mutate: subscribe } = useMutation({
        mutationFn: subscribeApi,

        onSuccess: () =>
            toast.success(
                'Email has been successfully added to our mailing list.',
            ),

        onError: (error) => toast.error(error.message),
    });

    return { isSubscribing, subscribe };
}
