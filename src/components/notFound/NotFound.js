import Heading from '../../ui/Heading';
import Image from '../../ui/Image';
import { useSettings } from '../settings/useSettings';
import { imageStyles } from '../collection/CollectionDetails';

function NotFound({ component = 'collection' }) {
    const { altImage } = useSettings();

    const primaryLayout = component === 'collection';

    return (
        <>
            {primaryLayout && <Image image={altImage} styles={imageStyles} />}

            <Heading
                title={`no ${component} found`}
                styles="my-20 text-center font-nunito text-2xl font-light uppercase tracking-wide text-stone-800 xs:text-3xl xs:tracking-wider sm:my-24 sm:font-normal md:text-4xl xl:my-28 2xl:my-32 2xl:text-5xl"
            />
        </>
    );
}

export default NotFound;
