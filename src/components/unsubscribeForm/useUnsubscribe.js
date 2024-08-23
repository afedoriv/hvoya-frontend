import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { unsubscribe as unsubscribeApi } from '../../services/apiSubscription';

export function useUnsubscribe() {
    const { isLoading: isUnsubscribing, mutate: unsubscribe } = useMutation({
        mutationFn: unsubscribeApi,

        onSuccess: () => toast.success('Your request has been sent.'),

        onError: (error) => toast.error(error.message),
    });

    return { isUnsubscribing, unsubscribe };
}
