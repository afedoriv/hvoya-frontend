import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormControl from '../../ui/FormControl';
import FormRow from '../../ui/FormRow';
import Loader from '../../ui/Loader';
import { useUpdateUser } from '../userUpdateForm/useUpdateUser';
import { PASSWORD_MIN_LENGTH } from '../../utils/constants/constants';

const controlStyles = {
    container:
        'mt-10 flex flex-col space-y-3 3xs:space-y-4 xs:flex-row xs:space-x-6 xs:space-y-0 sm:mt-8 sm:flex-col sm:space-x-0 sm:space-y-4 md:mt-10 md:flex-row md:space-x-6 md:space-y-0',
    resetButton:
        'w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-studio-100 p-3.5 text-center font-sans text-[11px] font-light uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:bg-stone-900 hover:font-extralight hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-default disabled:border-stone-700 disabled:text-stone-700 4xs:text-xs 3xs:text-sm sm:font-normal sm:hover:font-light sm:active:font-medium',
    submitButton:
        'w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-stone-900 p-3.5 text-center font-sans text-[11px] font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:bg-studio-100 hover:font-light hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-stone-700 disabled:bg-stone-700 4xs:text-xs 3xs:text-sm sm:font-light sm:hover:font-normal sm:active:font-medium',
};
const formStyles = {
    title: 'mb-2 border-b border-studio-200 px-0.5 pb-2 text-center font-sans text-lg font-thin capitalize tracking-wider text-stone-900 3xs:mb-2.5 3xs:pb-2.5 3xs:text-xl sm:text-left sm:font-nunito sm:uppercase 2xl:text-2xl',
    subtitle:
        'px-0.5 text-center font-sans text-base font-thin capitalize tracking-wider text-stone-900 sm:text-left',
    form: 'mt-8 w-full md:mt-10 xl:w-[80%] 2xl:mt-9 2xl:w-[63%]',
};

function PasswordUpdateForm() {
    const { isUpdatingUser, updateUser } = useUpdateUser();

    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
        reset,
    } = useForm();

    function onSubmit({ newPassword }) {
        updateUser({ password: newPassword }, { onSettled: () => reset() });
    }

    return (
        <>
            {isUpdatingUser && <Loader />}

            <Form
                title="Profile"
                subtitle="Edit Password Settings"
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <FormRow error={errors?.newPassword?.message}>
                    <input
                        id="newPassword"
                        type="password"
                        placeholder="New Password"
                        className="input-primary-green"
                        {...register('newPassword', {
                            required: 'This field is required',
                            minLength: {
                                value: PASSWORD_MIN_LENGTH,
                                message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
                            },
                        })}
                        disabled={isUpdatingUser}
                    />
                </FormRow>

                <FormRow error={errors?.newPasswordConfirm?.message}>
                    <input
                        id="newPasswordConfirm"
                        type="password"
                        placeholder="Confirm Password"
                        className="input-primary-green"
                        {...register('newPasswordConfirm', {
                            required: 'This field is required',
                            validate: (value) =>
                                value === getValues().newPassword ||
                                'Passwords do not match',
                        })}
                        disabled={isUpdatingUser}
                    />
                </FormRow>

                <FormControl
                    styles={controlStyles}
                    onReset={() => reset()}
                    disabled={isUpdatingUser}
                />
            </Form>
        </>
    );
}

export default PasswordUpdateForm;
