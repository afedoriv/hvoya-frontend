import FAQList from './FAQList';
import Heading from '../../ui/Heading';
import Image from '../../ui/Image';
import Loader from '../../ui/Loader';
import { useFAQs } from './useFAQs';
import { useSettings } from '../settings/useSettings';

const imageStyles = {
    figure: 'group/faqs-cover z-10 aspect-square w-full cursor-default 3xs:aspect-5/3 2xs:aspect-7/4 xs:aspect-2/1 md:aspect-5/2 lg:aspect-3/1',
    image: 'z-20 h-full w-full scale-110 object-cover transition-transform duration-300 ease-linear group-hover/faqs-cover:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

function FAQs() {
    const { isLoadingFaqs } = useFAQs();
    const { faqsImage } = useSettings();

    return (
        <main className="main-section padding-inline flex w-full flex-col items-center pb-16 sm:pb-20 xl:pb-24 2xl:pb-28">
            {isLoadingFaqs && <Loader />}

            <Heading
                title="Frequently Asked Questions"
                styles="mb-20 mt-10 text-center font-nunito text-2xl font-light tracking-wide text-studio-300 2xs:mt-8 xs:mb-24 xs:text-3xl xs:tracking-wider sm:mt-11 sm:font-normal md:mt-12 md:text-4xl 2xl:mb-28 2xl:text-5xl"
            />

            <Image image={faqsImage} styles={imageStyles} />

            <FAQList />
        </main>
    );
}

export default FAQs;
