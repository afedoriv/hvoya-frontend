import Box from '../../ui/Box';
import ContactForm from '../contactForm/ContactForm';
import Image from '../../ui/Image';
import ImagePanel from '../imagePanel/ImagePanel';
import Loader from '../../ui/Loader';
import StudioInfo from './StudioInfo';
import UnsubscribeForm from '../unsubscribeForm/UnsubscribeForm';
import { useSettings } from '../settings/useSettings';

const commonStyles = 'border-y border-studio-600';
const imageStyles = {
    figure: 'group/contact-cover z-10 mt-2 aspect-square w-full cursor-default 3xs:aspect-7/6 xs:aspect-5/4 sm:aspect-4/3 md:aspect-3/2 xl:aspect-5/3 3xl:aspect-7/4',
    image: 'z-20 h-full w-full scale-110 object-cover transition-transform duration-300 ease-linear group-hover/contact-cover:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

function Contact() {
    const { isLoading, contactImage, contactPanel1, contactPanel2 } =
        useSettings();

    return (
        <main className="main-section padding-inline 4xs:pb-1 3xs:pb-2 2xs:pb-4 md:pb-6 2xl:mb-7">
            {isLoading && <Loader />}

            <Image image={contactImage} styles={imageStyles} />

            <StudioInfo />

            <Box styles={commonStyles}>
                <ImagePanel images={contactPanel1} location="3" />
            </Box>

            <ContactForm />

            <Box styles={commonStyles}>
                <ImagePanel images={contactPanel2} location="4" />
            </Box>

            <UnsubscribeForm />
        </main>
    );
}

export default Contact;
