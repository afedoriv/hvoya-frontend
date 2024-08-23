import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Option from '../../ui/Option';
import { useSendMessage } from './useSendMessage';
import { useSettings } from '../settings/useSettings';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';
import { formatValue, getOptions } from '../../utils/helpers/helpers';

const formStyles = {
    title: 'text-center font-nunito text-2xl font-light uppercase tracking-wide text-studio-300 xs:text-3xl xs:tracking-wider sm:font-normal md:text-4xl',
    subtitle:
        'mb-4 mt-6 text-center font-nunito text-[12.5px] font-extralight tracking-wider text-studio-300 4xs:text-sm 2xs:mb-6 2xs:mt-7 2xs:text-base xs:mt-8 xs:font-light 2xl:text-lg',
    form: 'flex w-full flex-col items-center sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] 2xl:w-[45%]',
};

function ContactForm() {
    const { contactRef } = useContext(ScrollControlContext);
    const { isLoading, subjects } = useSettings();
    const { isSendingMessage, sendMessage } = useSendMessage();

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm();

    const disabled = isLoading || isSendingMessage || !subjects;
    const subjectOptions = getOptions(subjects);

    function onSubmit({
        senderFirstName,
        senderLastName,
        senderEmail,
        subject,
        message,
        file,
    }) {
        const attachedFile = !file.length ? null : file[0];
        const selectedSubject = subject?.replaceAll('-', ' ') || subjects?.[0];

        const newMessage = {
            firstName: senderFirstName.trim(),
            lastName: senderLastName.trim(),
            email: formatValue(senderEmail),
            subject: selectedSubject,
            message,
            file: attachedFile,
        };

        sendMessage(newMessage, { onSuccess: () => reset() });
    }

    return (
        <section
            ref={contactRef}
            className="my-10 flex w-full flex-col items-center 4xs:my-12 2xs:my-16 sm:py-3 md:my-20 md:py-0 lg:py-2 2xl:my-24 2xl:py-0"
        >
            <Form
                title="Contact Us"
                subtitle="For general questions, wholesale inquiries or to inquire about our products, please use this contact form."
                onSubmit={handleSubmit(onSubmit)}
                styles={formStyles}
            >
                <Box styles="flex w-full flex-col 2xl:flex-row 2xl:space-x-6">
                    <FormRow
                        label="First Name"
                        error={errors?.senderFirstName?.message}
                    >
                        <input
                            id="senderFirstName"
                            type="text"
                            className="input-basic-red"
                            {...register('senderFirstName', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value.trim() !== '' ||
                                    'Please enter at least 1 character',
                            })}
                            disabled={isSendingMessage}
                        />
                    </FormRow>

                    <FormRow
                        label="Last Name"
                        error={errors?.senderLastName?.message}
                    >
                        <input
                            id="senderLastName"
                            type="text"
                            className="input-basic-red"
                            {...register('senderLastName', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value.trim() !== '' ||
                                    'Please enter at least 1 character',
                            })}
                            disabled={isSendingMessage}
                        />
                    </FormRow>
                </Box>

                <FormRow label="Email" error={errors?.senderEmail?.message}>
                    <input
                        id="senderEmail"
                        type="email"
                        className="input-basic-red"
                        {...register('senderEmail', {
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please provide a valid email',
                            },
                        })}
                        disabled={isSendingMessage}
                    />
                </FormRow>

                <FormRow label="Subject" error={errors?.subject?.message}>
                    <select
                        id="subject"
                        className="h-8 w-full cursor-pointer rounded-sm border border-stone-300 px-2 text-center font-nunito text-xs font-medium capitalize tracking-wider text-studio-300 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear disabled:cursor-not-allowed 2xs:h-10 2xs:text-sm xs:font-semibold"
                        {...register('subject')}
                        disabled={disabled}
                    >
                        {subjectOptions.map(({ label, value }) => (
                            <Option
                                label={label}
                                value={value}
                                key={`subject-option-${value}`}
                            />
                        ))}
                    </select>
                </FormRow>

                <FormRow label="Message" error={errors?.message?.message}>
                    <textarea
                        id="message"
                        type="text"
                        className="h-20 w-full cursor-text rounded-sm border border-stone-300 px-2 py-1 font-nunito text-xs font-light tracking-wider text-stone-800 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear disabled:cursor-not-allowed 2xs:px-3.5 2xs:py-2 2xs:text-sm xs:font-normal"
                        {...register('message', {
                            required: 'This field is required',
                            validate: (value) =>
                                value.trim() !== '' ||
                                'Please enter your message',
                        })}
                        disabled={isSendingMessage}
                    />
                </FormRow>

                <FormRow label="Upload a File" error={errors?.file?.message}>
                    <input
                        id="file"
                        type="file"
                        accept="image/*,.pdf,.doc"
                        className="file:2xs:px-4.5 w-full rounded-sm border border-transparent px-0.5 font-nunito text-xs font-medium tracking-wider text-stone-500 transition ease-linear file:my-1 file:me-2.5 file:cursor-pointer file:rounded-full file:border-2 file:border-transparent file:bg-studio-300 file:px-3.5 file:py-2 file:font-nunito file:text-xs file:font-normal file:tracking-wider file:text-stone-50 file:transition-colors file:duration-200 file:ease-linear hover:file:border-studio-300 hover:file:bg-transparent hover:file:text-studio-300 focus:border-stone-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 file:disabled:cursor-not-allowed 2xs:text-sm file:2xs:me-3.5 file:2xs:py-2.5 file:2xs:text-sm xs:font-semibold file:xs:font-medium"
                        {...register('file')}
                        disabled={isSendingMessage}
                    />
                </FormRow>

                <Button
                    type="submit"
                    styles="mt-2 w-24 cursor-pointer rounded-sm border-2 border-studio-300 bg-transparent py-3 font-nunito text-xs font-semibold uppercase tracking-wider text-studio-300 transition-colors duration-200 ease-linear hover:bg-studio-300 hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear disabled:pointer-events-none disabled:cursor-not-allowed 3xs:mt-1 2xs:w-28 2xs:py-3.5 2xs:text-sm xs:font-bold"
                    disabled={isSendingMessage}
                >
                    Send
                </Button>
            </Form>
        </section>
    );
}

export default ContactForm;
