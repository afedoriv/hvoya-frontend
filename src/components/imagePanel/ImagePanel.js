import Box from '../../ui/Box';
import Image from '../../ui/Image';
import { addAltSrc } from '../../utils/helpers/image';

const primaryStyles = {
    container:
        'my-1 flex w-full space-x-1 4xs:my-1.5 4xs:space-x-1.5 2xs:my-0 2xs:space-x-2 sm:space-x-3.5 md:my-3.5 xl:my-4 xl:space-x-4 2xl:my-0 2xl:space-x-7',
    figure: 'group/image-panel-item z-10 aspect-square w-full cursor-default',
    image: 'z-20 h-full w-full scale-105 object-cover transition-transform duration-300 ease-linear group-hover/image-panel-item:scale-110',
    text: 'image-alt-text text-[6px] 4xs:text-[6.5px] 3xs:text-[8px] 2xs:text-[10px] xs:text-[13px] sm:text-sm md:text-base 2xl:text-lg',
};
const secondaryStyles = {
    container:
        'col-span-1 flex w-full flex-col gap-y-4 2xs:gap-y-6 sm:col-start-1 sm:row-span-full sm:row-start-2 sm:self-start lg:gap-y-10 2xl:gap-y-11',
    figure: 'group/image-panel-item z-10 aspect-2/3 w-full cursor-default',
    image: 'z-20 h-full w-full scale-105 object-cover transition-transform duration-300 ease-linear group-hover/image-panel-item:scale-100',
    text: 'image-alt-text text-sm 3xs:text-base xs:text-lg sm:text-base xl:text-lg',
};

function ImagePanel({ images, direction = 'horizontal', location }) {
    const verticalLayout = direction === 'vertical';
    const styles = verticalLayout ? secondaryStyles : primaryStyles;

    return (
        <Box styles={styles.container}>
            {images.map((image, index) => (
                <Image
                    image={
                        !verticalLayout
                            ? addAltSrc(image, index, location)
                            : image
                    }
                    styles={{
                        figure:
                            verticalLayout && index === 0
                                ? secondaryStyles.figure
                                : primaryStyles.figure,
                        image:
                            verticalLayout && index === 0
                                ? secondaryStyles.image
                                : primaryStyles.image,
                        text: styles.text,
                    }}
                    key={`image-panel-item-${index}`}
                />
            ))}
        </Box>
    );
}

export default ImagePanel;
