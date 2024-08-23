import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Box from '../../ui/Box';
import CardInput from './CardInput';
import ErrorMessage from '../checkoutMessages/ErrorMessage';
import Fieldset from '../../ui/Fieldset';
import Form from '../../ui/Form';
import FormControl from '../../ui/FormControl';
import FormRow from '../../ui/FormRow';
import Loader from '../../ui/Loader';
import Option from '../../ui/Option';
import SuccessMessage from '../checkoutMessages/SuccessMessage';
import { useCheckout } from './useCheckout';
import { useDeleteCartItems } from '../cart/useDeleteCartItems';
import { useStripeHelpers } from './useStripeHelpers';
import { useUser } from '../authentication/useUser';
import { clearCart } from '../../store/cartSlice';
import { getTotalQty } from '../../store/cartSelectors';
import { formatOrder } from '../../utils/helpers/order';
import { getOptions, isEqual as isDefault } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';
import { STATES, STATE_DEFAULT } from '../../utils/constants/ui';

const commonStyles =
    'whitespace-nowrap font-nunito text-[13.5px] font-bold uppercase tracking-wider text-stone-900 4xs:text-sm 3xs:text-base xs:text-lg xl:text-xl 3xl:text-[22px]';
const controlStyles = {
    container:
        'flex flex-col-reverse gap-3 3xs:gap-4 2xs:mt-2 2xs:gap-5 xs:mt-3 xs:flex-row xs:gap-6 md:mt-2',
    resetButton:
        'mx-0.5 cursor-pointer whitespace-nowrap bg-studio-100 p-3 text-center font-nunito text-[11px] font-normal uppercase tracking-wider text-stone-900 underline underline-offset-2 transition-colors duration-200 ease-linear hover:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:pointer-events-none disabled:cursor-default 4xs:text-xs 3xs:p-3.5 xs:mx-0 xs:w-full xs:border xs:border-stone-900',
    submitButton:
        'w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-stone-900 p-3.5 text-center font-sans text-[11px] font-extralight uppercase tracking-wider text-stone-50 transition-colors duration-200 ease-linear hover:bg-studio-100 hover:font-light hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-300 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-stone-700 disabled:bg-stone-700 4xs:text-xs 3xs:text-sm sm:font-light sm:hover:font-normal sm:active:font-medium',
};
const formStyles = {
    title: 'text-center font-nunito text-[15.5px] font-bold uppercase tracking-wider text-studio-300 4xs:text-base 3xs:text-lg xs:text-xl xl:text-[22px] 3xl:text-2xl',
    form: 'mt-6 4xs:mt-7 xs:mt-8 sm:mt-9 md:mx-auto md:mt-10 md:max-w-[720px] xl:max-w-[750px]',
};

function CheckoutForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalQty = useSelector(getTotalQty);

    const { user } = useUser();
    const { isCheckingOut, isSuccess, error, order, checkout } = useCheckout();
    const { clearCardElement } = useStripeHelpers();
    const { isDeletingCartItems, deleteCartItems } = useDeleteCartItems();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        defaultValues: { sameBillingInfo: true },
    });

    const cartIsEmpty = totalQty === 0;
    const sameBillingInfo = watch('sameBillingInfo');
    const stateOptions = getOptions(STATES, STATE_DEFAULT);

    function onReset() {
        reset();
        navigate(PATHS.SHOP);
    }

    function onSubmit(data) {
        if (cartIsEmpty) {
            toast.error('Your shopping bag is empty. Start shopping.');
            clearCardElement();
            reset();
            return;
        }

        const orderDetails = formatOrder(data);

        checkout(
            { order: orderDetails, userId: user.sub },
            {
                onSuccess: () => {
                    deleteCartItems(user.sub, {
                        onSuccess: () => {
                            dispatch(clearCart());
                        },
                    });
                },
                onError: () => clearCardElement(),
                onSettled: () => reset(),
            },
        );
    }

    return (
        <main className="padding-inline main-section pb-10 pt-2.5 4xs:pt-3.5 2xs:pb-12 2xs:pt-4 xs:pb-20 sm:pt-5 lg:pb-24 xl:pt-6">
            {isCheckingOut && <Loader />}

            {error && <ErrorMessage error={error} />}

            {isSuccess ? (
                <SuccessMessage email={order?.payment?.receipt_email} />
            ) : (
                <Form
                    title="Ready to checkout?"
                    onSubmit={handleSubmit(onSubmit)}
                    styles={formStyles}
                >
                    <Fieldset
                        legend="Shipping Address"
                        legendStyles={`${commonStyles} mb-5 sm:mb-6 md:mb-2.5`}
                    >
                        <Box styles="flex flex-col xs:flex-row xs:space-x-6 lg:space-x-8">
                            <FormRow error={errors?.firstName?.message}>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    className="input-primary-red"
                                    {...register('firstName', {
                                        required: 'This field is required',
                                        validate: (value) =>
                                            value.trim() !== '' ||
                                            'Enter first name',
                                    })}
                                    disabled={isCheckingOut}
                                />
                            </FormRow>

                            <FormRow error={errors?.lastName?.message}>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    className="input-primary-red"
                                    {...register('lastName', {
                                        required: 'This field is required',
                                        validate: (value) =>
                                            value.trim() !== '' ||
                                            'Enter last name',
                                    })}
                                    disabled={isCheckingOut}
                                />
                            </FormRow>
                        </Box>

                        <FormRow error={errors?.address?.message}>
                            <input
                                id="address"
                                type="text"
                                placeholder="Address line 1"
                                className="input-primary-red"
                                {...register('address', {
                                    required: 'This field is required',
                                    validate: (value) =>
                                        value.trim() !== '' || 'Enter address',
                                })}
                                disabled={isCheckingOut}
                            />
                        </FormRow>

                        <FormRow error={errors?.addressOptional?.message}>
                            <input
                                id="addressOptional"
                                type="text"
                                placeholder="Address line 2 (Optional)"
                                className="input-primary-red"
                                {...register('addressOptional')}
                                disabled={isCheckingOut}
                            />
                        </FormRow>

                        <Box styles="flex flex-col sm:flex-row sm:space-x-6 lg:space-x-8">
                            <FormRow error={errors?.city?.message}>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    className="input-primary-red"
                                    {...register('city', {
                                        required: 'This field is required',
                                        validate: (value) =>
                                            value.trim() !== '' || 'Enter city',
                                    })}
                                    disabled={isCheckingOut}
                                />
                            </FormRow>

                            <Box styles="flex flex-col 3xs:flex-row 3xs:space-x-4 2xs:space-x-6 sm:w-full lg:space-x-8">
                                <FormRow error={errors?.state?.message}>
                                    <select
                                        id="state"
                                        className="h-12 w-full cursor-pointer border border-studio-300 px-2 text-left font-nunito text-sm font-extralight capitalize tracking-wider text-stone-900 transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-1 focus:transition focus:ease-linear disabled:cursor-not-allowed 3xs:px-2.5 3xs:font-light md:px-3 2xl:px-4 2xl:text-base"
                                        defaultValue={STATE_DEFAULT}
                                        {...register('state', {
                                            validate: (value) =>
                                                value !== STATE_DEFAULT ||
                                                'Select a state',
                                        })}
                                        disabled={isCheckingOut}
                                    >
                                        {stateOptions.map(
                                            ({ label, value }) => (
                                                <Option
                                                    label={
                                                        isDefault(
                                                            value,
                                                            STATE_DEFAULT,
                                                        )
                                                            ? label
                                                            : label.toUpperCase()
                                                    }
                                                    value={value}
                                                    disabled={isDefault(
                                                        value,
                                                        STATE_DEFAULT,
                                                    )}
                                                    key={`state-option-${value}`}
                                                />
                                            ),
                                        )}
                                    </select>
                                </FormRow>

                                <FormRow error={errors?.zipCode?.message}>
                                    <input
                                        id="zipCode"
                                        type="text"
                                        placeholder="Zip code"
                                        className="input-primary-red"
                                        {...register('zipCode', {
                                            required: 'This field is required',
                                            pattern: {
                                                value: /^\d{5}$/,
                                                message:
                                                    'Enter 5-digit zip code',
                                            },
                                        })}
                                        disabled={isCheckingOut}
                                    />
                                </FormRow>
                            </Box>
                        </Box>

                        <Box styles="flex flex-col xs:flex-row xs:space-x-6 lg:space-x-8">
                            <FormRow error={errors?.email?.message}>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                    className="input-primary-red"
                                    {...register('email', {
                                        required: 'This field is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Enter a valid email',
                                        },
                                    })}
                                    disabled={isCheckingOut}
                                />
                            </FormRow>

                            <FormRow error={errors?.phone?.message}>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone number"
                                    className="input-primary-red"
                                    {...register('phone', {
                                        required: 'This field is required',
                                        pattern: {
                                            value: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*(?:[.-]\s*)?([0-9]{4})$/,
                                            message:
                                                'Enter 10-digit phone number',
                                        },
                                    })}
                                    disabled={isCheckingOut}
                                />
                            </FormRow>
                        </Box>
                    </Fieldset>

                    <Fieldset
                        legend="Gift Option"
                        legendStyles={`${commonStyles} mb-3 md:mb-0`}
                    >
                        <FormRow label="Include gift packaging (free)">
                            <input
                                id="giftPackaging"
                                type="checkbox"
                                defaultChecked={false}
                                className="checkbox-primary-red"
                                {...register('giftPackaging')}
                                disabled={isCheckingOut}
                            />
                        </FormRow>
                    </Fieldset>

                    <Fieldset
                        legend="Payment Method"
                        legendStyles={`${commonStyles} mb-3 md:mb-0`}
                    >
                        <FormRow label="The name on the credit card is the same">
                            <input
                                id="sameBillingInfo"
                                type="checkbox"
                                defaultChecked={sameBillingInfo}
                                className="checkbox-primary-red"
                                {...register('sameBillingInfo')}
                                disabled={isCheckingOut}
                            />
                        </FormRow>

                        {!sameBillingInfo && (
                            <Box styles="flex flex-col xs:flex-row xs:space-x-6 lg:space-x-8">
                                <FormRow
                                    error={errors?.cardholderFirstName?.message}
                                >
                                    <input
                                        id="cardholderFirstName"
                                        type="text"
                                        placeholder="First name"
                                        className="input-primary-red"
                                        {...register('cardholderFirstName', {
                                            required: 'This field is required',
                                            validate: (value) =>
                                                value.trim() !== '' ||
                                                'Enter first name',
                                        })}
                                        disabled={isCheckingOut}
                                    />
                                </FormRow>

                                <FormRow
                                    error={errors?.cardholderLastName?.message}
                                >
                                    <input
                                        id="cardholderLastName"
                                        type="text"
                                        placeholder="Last name"
                                        className="input-primary-red"
                                        {...register('cardholderLastName', {
                                            required: 'This field is required',
                                            validate: (value) =>
                                                value.trim() !== '' ||
                                                'Enter last name',
                                        })}
                                        disabled={isCheckingOut}
                                    />
                                </FormRow>
                            </Box>
                        )}

                        <CardInput />
                    </Fieldset>

                    <FormControl
                        resetLabel="Continue Shopping"
                        submitLabel="Place Order"
                        styles={controlStyles}
                        onReset={onReset}
                        disabled={isDeletingCartItems || isCheckingOut}
                    />
                </Form>
            )}
        </main>
    );
}

export default CheckoutForm;
