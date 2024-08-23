import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { sendMessage as sendMessageApi } from '../../services/apiContact';

export function useSendMessage() {
    const { isLoading: isSendingMessage, mutate: sendMessage } = useMutation({
        mutationFn: sendMessageApi,

        onSuccess: () => toast.success('Your message has been sent!'),

        onError: (err) => toast.error(err.message),
    });

    return { isSendingMessage, sendMessage };
}
