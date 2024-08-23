import { useState } from 'react';
import Box from '../../ui/Box';
import Slider from './Slider';
import SliderControl from './SliderControl';
import { useSettings } from '../settings/useSettings';

function ImageSlider() {
    const [slide, setSlide] = useState(0);
    const { isLoading, slides } = useSettings();

    const lastSlide = slides.length - 1;

    function handleNextSlide() {
        const nextSlide = slide === lastSlide ? 0 : (slide) => slide + 1;
        setSlide(nextSlide);
    }
    function handlePreviousSlide() {
        const previousSlide = slide === 0 ? lastSlide : (slide) => slide - 1;
        setSlide(previousSlide);
    }

    return (
        <Box styles="relative aspect-square w-full overflow-hidden 3xs:aspect-7/6 xs:aspect-5/4 sm:aspect-4/3 md:aspect-3/2 xl:aspect-5/3 3xl:aspect-7/4">
            <Slider slide={slide} slides={slides} />

            <SliderControl
                onNextSlide={handleNextSlide}
                onPreviousSlide={handlePreviousSlide}
                disabled={isLoading}
            />
        </Box>
    );
}

export default ImageSlider;
