import { useForm } from 'react-hook-form';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useSubscribe } from './useSubscribe';
import { formatValue } from '../../utils/helpers/helpers';

const formStyles = {
    form: 'mt-6 flex w-full flex-col items-center 3xs:w-[87%] 2xs:w-[80%] xs:mt-8 xs:w-[70%] sm:w-[58%] md:mt-6 md:w-[95%] xl:mt-4 xl:w-full xl:flex-row 3xl:w-[85%]',
    subtitle:
        'text-center font-nunito text-sm font-extralight tracking-wider text-studio-300 2xs:text-base xs:font-light 2xl:text-lg',
};

function SubscribeForm() {
    const { isSubscribing, subscribe } = useSubscribe();

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm();

    function onSubmit({ subscribeEmail }) {
        subscribe(
            { email: formatValue(subscribeEmail) },
            { onSettled: () => reset() },
        );
    }

    return (
        <Box styles="row-span-1 row-start-2 mb-8 flex w-full flex-col items-center 2xs:mb-10 md:col-span-1 md:col-start-2 md:row-start-1 md:mb-12 md:items-start md:ps-2 lg:mb-14 xl:mb-20 xl:ps-0 2xl:ps-14">
            <Form
                subtitle="Sign up to receive news and updates."
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <FormRow error={errors?.subscribeEmail?.message}>
                    <input
                        id="subscribeEmail"
                        type="email"
                        placeholder="Email Address"
                        className="h-12 w-full cursor-text border border-studio-300 px-3 font-nunito text-xs font-light tracking-wider text-stone-800 transition ease-linear placeholder:font-nunito placeholder:text-sm placeholder:font-extralight placeholder:tracking-wider placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:cursor-not-allowed 3xs:px-3.5 3xs:placeholder:font-light 2xs:text-sm xs:font-normal md:px-4 2xl:px-5 2xl:placeholder:text-base"
                        {...register('subscribeEmail', {
                            required: 'Enter email address',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please provide a valid email',
                            },
                        })}
                        disabled={isSubscribing}
                    />
                </FormRow>

                <Button
                    type="submit"
                    styles="h-12 w-28 cursor-pointer whitespace-nowrap border-2 border-studio-300 bg-transparent text-center font-nunito text-xs font-semibold uppercase tracking-wider text-studio-300 transition-colors duration-200 ease-linear hover:bg-studio-300 hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:pointer-events-none disabled:cursor-not-allowed 3xs:w-32 2xs:text-sm xs:font-bold md:me-auto md:w-28 xl:mb-8 xl:me-0 xl:ms-6 xl:px-4 2xl:ms-8 2xl:px-6"
                    disabled={isSubscribing}
                >
                    Sign Up
                </Button>
            </Form>
        </Box>
    );
}

export default SubscribeForm;
