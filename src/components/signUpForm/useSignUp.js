import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signUp as signUpApi } from '../../services/apiAuth';

const options = {
    className: 'notification-control',
    duration: 60000,
};

export function useSignUp() {
    const { isLoading: isSigningUp, mutate: signUp } = useMutation({
        mutationFn: signUpApi,

        onSuccess: (newUser) => {
            toast.success(
                "Congratulations! \nPlease check your email for a verification link to activate your account. \nOnce verified, you're all set to go!",
                options,
            );
        },

        onError: (err) => toast.error(err.message),
    });

    return { isSigningUp, signUp };
}
