import Image from '../../ui/Image';
import ImageSlider from '../imageSlider/ImageSlider';
import Intro from './Intro';
import Loader from '../../ui/Loader';
import ShoppingCategories from './ShoppingCategories';
import { useSettings } from '../settings/useSettings';

const imageStyles = {
    figure: 'group/about-cover z-10 mt-2 aspect-square w-full cursor-default 3xs:aspect-7/6 xs:aspect-5/4 sm:aspect-4/3 md:aspect-3/2 xl:aspect-5/3 3xl:aspect-7/4',
    image: 'z-20 h-full w-full scale-110 object-cover transition-transform duration-300 ease-linear group-hover/about-cover:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

const content = {
    about: [
        'Hvoya Pottery Co. is a New Jersey based ceramic studio. Each ceramic piece is handcrafted combining Industrial Design with traditional techniques to create “New Modern” functional and timeless pottery for daily life.',
        'In the studio, a unique blend of fine clay is made from scratch. Each piece is fired in the kiln at a temperature of 1180ºF degrees resulting in a luxurious look decorative objects and food safe ceramic tableware.',
    ],
    studio: [
        "We offer a wide variety of tableware and home decor to buy online, from dinner plates and bowls to vases and pots, allowing you to build a stunning matching sets that's perfectly suited to your needs.",
    ],
};

function About() {
    const { isLoading, aboutImage } = useSettings();

    return (
        <main className="main-section padding-inline">
            {isLoading && <Loader />}

            <Image image={aboutImage} styles={imageStyles} />

            <Intro title="About" content={content.about} />
            <ImageSlider />

            <Intro title="Studio" content={content.studio} />
            <ShoppingCategories />
        </main>
    );
}

export default About;
