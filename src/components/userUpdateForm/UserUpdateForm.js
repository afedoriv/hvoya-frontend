import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormControl from '../../ui/FormControl';
import FormRow from '../../ui/FormRow';
import Loader from '../../ui/Loader';
import { useUpdateUser } from './useUpdateUser';
import { useUser } from '../authentication/useUser';

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

function UserUpdateForm() {
    const { user } = useUser();
    const { isUpdatingUser, updateUser } = useUpdateUser();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    function onSubmit({ newFirstName, newLastName }) {
        updateUser(
            {
                firstName: newFirstName.trim(),
                lastName: newLastName.trim(),
            },
            { onSettled: () => reset() },
        );
    }

    return (
        <>
            {isUpdatingUser && <Loader />}

            <Form
                title="Profile"
                subtitle="Edit Personal Information"
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <FormRow error={errors?.newFirstName?.message}>
                    <input
                        id="newFirstName"
                        type="text"
                        placeholder="First Name"
                        defaultValue={user?.firstName}
                        className="input-primary-green"
                        {...register('newFirstName', {
                            required: 'This field is required',
                            validate: (value) =>
                                value.trim() !== '' ||
                                'Please enter at least 1 character',
                        })}
                        disabled={isUpdatingUser}
                    />
                </FormRow>

                <FormRow error={errors?.newLastName?.message}>
                    <input
                        id="newLastName"
                        type="text"
                        placeholder="Last Name"
                        defaultValue={user?.lastName}
                        className="input-primary-green"
                        {...register('newLastName', {
                            required: 'This field is required',
                            validate: (value) =>
                                value.trim() !== '' ||
                                'Please enter at least 1 character',
                        })}
                        disabled={isUpdatingUser}
                    />
                </FormRow>

                <FormRow>
                    <input
                        id="newEmail"
                        type="email"
                        placeholder="Email"
                        value={user?.email}
                        className="h-12 w-full cursor-not-allowed border border-studio-200 bg-stone-50 px-3 font-nunito text-sm font-extralight tracking-wider text-stone-700 3xs:px-3.5 3xs:font-light md:px-4 2xl:px-5 2xl:text-base"
                        disabled={true}
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

export default UserUpdateForm;
