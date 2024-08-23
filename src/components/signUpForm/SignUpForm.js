import { useForm } from 'react-hook-form';
import Box from '../../ui/Box';
import Form from '../../ui/Form';
import FormControl from '../../ui/FormControl';
import FormRow from '../../ui/FormRow';
import Loader from '../../ui/Loader';
import { usePath } from '../../hooks/usePath';
import { useSignUp } from './useSignUp';
import { formatValue } from '../../utils/helpers/helpers';
import { BASE_CLIENT_URL } from '../../utils/constants/config';
import { PATHS } from '../../utils/constants/routes';
import { PASSWORD_MIN_LENGTH } from '../../utils/constants/constants';

const controlStyles = {
    container:
        'mt-8 flex flex-col space-y-4 2xs:space-y-6 xs:mt-10 xs:flex-row xs:space-x-6 xs:space-y-0 md:space-x-8 2xl:mt-12',
    resetButton:
        'w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-studio-100 p-3.5 text-center font-sans text-[11px] font-light uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:bg-stone-900 hover:font-extralight hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-default disabled:border-stone-700 disabled:text-stone-700 4xs:text-xs 3xs:text-sm sm:font-normal sm:hover:font-light sm:active:font-medium',
    submitButton:
        'w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-stone-900 p-3.5 text-center font-sans text-[11px] font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:bg-studio-100 hover:font-light hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-stone-700 disabled:bg-stone-700 4xs:text-xs 3xs:text-sm sm:font-light sm:hover:font-normal sm:active:font-medium',
};
const formStyles = {
    title: 'px-0.5 text-center font-sans text-lg font-thin uppercase tracking-wider text-stone-900 3xs:text-xl 2xl:text-2xl',
    form: 'mt-8 4xs:mt-10 sm:mx-auto sm:mt-11 sm:max-w-[580px] 2xl:mt-12 2xl:max-w-[600px]',
};

function SignUpForm() {
    const { isSigningUp, signUp } = useSignUp();
    const { previousPath, prevPathMatches } = usePath();

    const {
        formState: { errors },
        getValues,
        handleSubmit,
        register,
        reset,
    } = useForm();

    const redirectUrl = prevPathMatches(PATHS.CART)
        ? previousPath
        : PATHS.ACCOUNT;

    function onSubmit({
        newUserFirstName,
        newUserLastName,
        newUserEmail,
        newUserPassword,
        newUserSubscription,
    }) {
        const newUserData = {
            firstName: newUserFirstName.trim(),
            lastName: newUserLastName.trim(),
            email: formatValue(newUserEmail),
            password: newUserPassword,
            subscription: newUserSubscription,
            redirectUrl: BASE_CLIENT_URL.concat(redirectUrl),
        };

        signUp(newUserData, { onSettled: () => reset() });
    }

    return (
        <main className="padding-inline main-section pb-10 pt-6 3xs:pb-12 xs:pb-20 xl:pb-24">
            {isSigningUp && <Loader />}

            <Form
                title="Create an Account"
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <Box styles="flex flex-col xs:flex-row xs:space-x-6 md:space-x-8">
                    <FormRow error={errors?.newUserFirstName?.message}>
                        <input
                            id="newUserFirstName"
                            type="text"
                            placeholder="First Name"
                            className="input-primary-green"
                            {...register('newUserFirstName', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value.trim() !== '' ||
                                    'Please enter at least 1 character',
                            })}
                            disabled={isSigningUp}
                        />
                    </FormRow>

                    <FormRow error={errors?.newUserLastName?.message}>
                        <input
                            id="newUserLastName"
                            type="text"
                            placeholder="Last Name"
                            className="input-primary-green"
                            {...register('newUserLastName', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value.trim() !== '' ||
                                    'Please enter at least 1 character',
                            })}
                            disabled={isSigningUp}
                        />
                    </FormRow>
                </Box>

                <FormRow error={errors?.newUserEmail?.message}>
                    <input
                        id="newUserEmail"
                        type="email"
                        placeholder="Email"
                        className="input-primary-green"
                        {...register('newUserEmail', {
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please provide a valid email',
                            },
                        })}
                        disabled={isSigningUp}
                    />
                </FormRow>

                <FormRow error={errors?.newUserPassword?.message}>
                    <input
                        id="newUserPassword"
                        type="password"
                        placeholder="Password"
                        className="input-primary-green"
                        {...register('newUserPassword', {
                            required: 'This field is required',
                            minLength: {
                                value: PASSWORD_MIN_LENGTH,
                                message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
                            },
                        })}
                        disabled={isSigningUp}
                    />
                </FormRow>

                <FormRow error={errors?.newUserPasswordConfirm?.message}>
                    <input
                        id="newUserPasswordConfirm"
                        type="password"
                        placeholder="Confirm Password"
                        className="input-primary-green"
                        {...register('newUserPasswordConfirm', {
                            required: 'This field is required',
                            validate: (value) =>
                                value === getValues().newUserPassword ||
                                'Passwords do not match',
                        })}
                        disabled={isSigningUp}
                    />
                </FormRow>

                <FormRow label="Email me about new arrivals">
                    <input
                        id="newUserSubscription"
                        type="checkbox"
                        defaultChecked={true}
                        className="checkbox-primary-green"
                        {...register('newUserSubscription')}
                        disabled={isSigningUp}
                    />
                </FormRow>

                <FormControl
                    submitLabel="Create An Account"
                    styles={controlStyles}
                    onReset={() => reset()}
                    disabled={isSigningUp}
                />
            </Form>
        </main>
    );
}

export default SignUpForm;
