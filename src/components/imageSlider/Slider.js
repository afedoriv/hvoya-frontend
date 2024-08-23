import Image from '../../ui/Image';
import { addAltSrc } from '../../utils/helpers/image';

const imageStyles = {
    figure: 'z-0 h-full w-full cursor-default',
    image: 'z-10 h-full w-full object-cover',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg 2xl:text-xl',
};

function Slider({ slide, slides }) {
    const count = slides.length;
    const width = count * 100;
    const distance = (100 / count) * slide;

    return (
        <div
            className="flex h-full transition-transform duration-500 ease-linear"
            style={{
                width: `${width}%`,
                transform: `translateX(-${distance}%)`,
            }}
        >
            {slides.map((image, index) => (
                <Image
                    image={addAltSrc(image, index, 1)}
                    styles={imageStyles}
                    key={`image-slider-slide-${index}`}
                />
            ))}
        </div>
    );
}

export default Slider;
