import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Loader from '../../ui/Loader';
import { useSignIn } from './useSignIn';

const formStyles = {
    title: 'px-0.5 text-center font-sans text-lg font-thin uppercase tracking-wider text-stone-900 3xs:text-xl 2xl:text-2xl',
    subtitle:
        'hidden whitespace-nowrap px-0.5 text-center font-sans text-sm font-thin capitalize tracking-wider text-studio-200 3xs:text-base sm:mt-5 sm:block 2xl:text-lg',
    form: 'mt-6 2xs:mt-7 sm:mt-9',
};

function LoginForm() {
    const { isSigningIn, signIn } = useSignIn();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    function onSubmit({ currentUserEmail, currentUserPassword }) {
        signIn(
            { email: currentUserEmail, password: currentUserPassword },
            { onSettled: () => reset() },
        );
    }

    return (
        <section className="row-span-1 row-start-2 sm:col-span-1 sm:col-start-1 sm:row-start-1">
            {isSigningIn && <Loader />}

            <Form
                title="Sign In"
                subtitle="I have an account"
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <FormRow error={errors?.currentUserEmail?.message}>
                    <input
                        id="currentUserEmail"
                        type="email"
                        placeholder="Email"
                        className="input-primary-green"
                        {...register('currentUserEmail', {
                            required: 'This field is required',
                        })}
                        disabled={isSigningIn}
                    />
                </FormRow>

                <FormRow error={errors?.currentUserPassword?.message}>
                    <input
                        id="currentUserPassword"
                        type="password"
                        placeholder="Password"
                        className="input-primary-green"
                        {...register('currentUserPassword', {
                            required: 'This field is required',
                        })}
                        disabled={isSigningIn}
                    />
                </FormRow>

                <Button
                    type="submit"
                    styles="w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-stone-900 p-3.5 text-center font-sans text-[11px] font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:bg-studio-100 hover:font-light hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-stone-700 disabled:bg-stone-700 4xs:text-xs 3xs:text-sm 2xs:mt-2 sm:mt-2 sm:font-light sm:hover:font-normal sm:active:font-medium"
                    disabled={isSigningIn}
                >
                    Sign In
                </Button>
            </Form>
        </section>
    );
}

export default LoginForm;
