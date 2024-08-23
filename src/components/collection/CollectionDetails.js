import CollectionProducts from './CollectionProducts';
import Heading from '../../ui/Heading';
import Image from '../../ui/Image';
import NotFound from '../notFound/NotFound';
import { useCollection } from './useCollection';

export const imageStyles = {
    figure: 'group/collection-cover z-10 mt-2 aspect-square w-full cursor-default 3xs:aspect-3/2 md:aspect-2/1',
    image: 'z-20 h-full w-full scale-110 object-cover transition-transform duration-300 ease-linear group-hover/collection-cover:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

function CollectionDetails() {
    const { collection, coverImage } = useCollection();

    if (!collection) return <NotFound />;

    return (
        <>
            <Image image={coverImage} styles={imageStyles} />

            <Heading
                title={`${collection} collection`}
                styles="my-20 text-center font-nunito text-2xl font-light uppercase tracking-wide text-stone-800 xs:text-3xl xs:tracking-wider sm:my-24 sm:font-normal md:text-4xl xl:my-28 2xl:my-32 2xl:text-5xl"
            />

            <CollectionProducts />
        </>
    );
}

export default CollectionDetails;
