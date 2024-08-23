import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useUnsubscribe } from './useUnsubscribe';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';
import { formatValue } from '../../utils/helpers/helpers';

const formStyles = {
    title: 'text-center font-nunito text-2xl font-light uppercase tracking-wide text-studio-300 xs:text-3xl xs:tracking-wider sm:font-normal md:text-4xl',
    subtitle:
        'mb-4 mt-6 text-center font-nunito text-[12.5px] font-extralight tracking-wider text-studio-300 4xs:text-sm 2xs:mb-6 2xs:mt-7 2xs:text-base xs:mt-8 xs:font-light 2xl:text-lg',
    form: 'flex w-full flex-col items-center sm:w-[75%] md:w-[70%] md:flex-row md:space-x-6 lg:w-[65%] xl:w-[60%] 2xl:w-[45%]',
};

function UnsubscribeForm() {
    const { unsubscribeRef } = useContext(ScrollControlContext);
    const { isUnsubscribing, unsubscribe } = useUnsubscribe();

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm();

    function onSubmit({ unsubscribeEmail }) {
        const userEmail = formatValue(unsubscribeEmail);

        unsubscribe(userEmail, { onSuccess: () => reset() });
    }

    return (
        <section
            ref={unsubscribeRef}
            className="my-10 flex w-full flex-col items-center 4xs:my-12 2xs:my-16 sm:py-3 md:my-20 md:py-0 lg:py-2 2xl:my-24 2xl:py-0"
        >
            <Form
                title="Unsubscribe"
                subtitle="Enter your email to unsubscribe from our mailing list."
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <FormRow
                    label="Email"
                    error={errors?.unsubscribeEmail?.message}
                >
                    <input
                        id="unsubscribeEmail"
                        type="email"
                        className="input-basic-red"
                        {...register('unsubscribeEmail', {
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please provide a valid email',
                            },
                        })}
                        disabled={isUnsubscribing}
                    />
                </FormRow>

                <Button
                    type="submit"
                    styles="mt-4 w-24 cursor-pointer rounded-sm border-2 border-studio-300 bg-transparent py-3 font-nunito text-xs font-semibold uppercase tracking-wider text-studio-300 transition-colors duration-200 ease-linear hover:bg-studio-300 hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear disabled:pointer-events-none disabled:cursor-not-allowed 2xs:w-28 2xs:py-3.5 2xs:text-sm xs:font-bold md:mt-1.5 md:w-36"
                    disabled={isUnsubscribing}
                >
                    Submit
                </Button>
            </Form>
        </section>
    );
}

export default UnsubscribeForm;
