import { useSelector } from 'react-redux';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import EstimatedTotal from '../../ui/EstimatedTotal';
import FreeShippingPromo from './FreeShippingPromo';
import Heading from '../../ui/Heading';
import OrderEstimates from './OrderEstimates';
import Text from '../../ui/Text';
import { estimateTotal } from '../../store/cartSelectors';

const priceStyles = {
    container:
        'mb-6 mt-4 flex justify-between space-x-2 3xs:mb-7 2xs:mb-8 xs:mb-9 xs:mt-5 sm:mb-10',
    text: 'whitespace-nowrap font-nunito text-[13px] font-medium tracking-wider text-stone-900 3xs:text-sm 2xs:text-[15px] 2xl:text-lg',
    number: 'font-nunito text-[13px] font-medium tracking-wider text-stone-900 3xs:text-sm 2xs:text-[15px] 2xl:text-lg',
};

function OrderSummary() {
    const total = useSelector(estimateTotal);

    return (
        <section className="col-span-full col-start-1 flex flex-col self-start border border-studio-300 px-2 py-4 4xs:px-2.5 4xs:pt-5 3xs:px-3 3xs:py-5 2xs:px-5 xs:p-6 sm:px-12 sm:py-7 md:px-16 xl:col-start-2 xl:row-span-2 xl:row-start-2 xl:p-6 3xl:px-8">
            <Heading
                title="Order Summary"
                styles="mx-auto mb-3 whitespace-nowrap font-nunito text-[13.5px] font-bold uppercase tracking-wider text-stone-900 4xs:mb-4 4xs:text-sm 3xs:text-base 2xs:ms-0 xs:mt-1 xs:text-lg xl:ms-auto xl:text-xl 2xl:mb-5 3xl:text-[22px]"
            />

            <OrderEstimates />

            <FreeShippingPromo />

            <EstimatedTotal
                description="Order Total"
                amount={total}
                styles={priceStyles}
            />

            <ButtonPanel />

            <Text
                text="Item availability and pricing are not guaranteed."
                styles="font-sans text-[9.5px] font-extralight tracking-wider text-stone-500 3xs:text-[10.5px] 2xs:text-[11px]"
            />
        </section>
    );
}

export default OrderSummary;
