import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Image from '../../ui/Image';
import ProductPrice from '../productPrice/ProductPrice';

const imageStyles = {
    figure: 'aspect-square w-[32%] 4xs:w-[35%] 3xs:w-[40%] 2xs:w-[45%] sm:w-[40%] 2xl:w-[35%]',
    image: 'h-full w-full object-cover',
    text: 'image-alt-text text-[6px] 4xs:text-[7px] 3xs:text-[9px] 2xs:text-[12px] xs:text-sm',
};
const priceStyles = {
    container: 'flex',
    currentPrice:
        'font-sans text-[11px] font-normal tracking-wide text-stone-900 4xs:text-[12.5px] 3xs:text-[13px] 2xs:text-[14.5px] sm:text-[15px] 2xl:text-base',
    originalPrice:
        'me-1 font-sans text-[11px] font-extralight tracking-wide text-studio-200 line-through 4xs:me-1.5 4xs:text-[12.5px] 3xs:text-[13px] 2xs:text-[14.5px] sm:text-[15px] md:font-light 2xl:text-base',
};

function AddedProductDetails({
    product: {
        discount,
        image: { alt, altSrc, altPlaceholder },
        regularPrice,
        title,
    },
}) {
    const image = { alt, src: altSrc, placeholder: altPlaceholder };

    return (
        <Box styles="mb-6 mt-4 flex space-x-2 4xs:space-x-4 3xs:mb-10 3xs:mt-8 2xs:space-x-6 xl:mb-12 xl:mt-10">
            <Image image={image} styles={imageStyles} />

            <Box styles="flex w-full flex-col items-start space-y-2 2xs:space-y-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:space-x-4 sm:space-y-0 2xl:flex-col 2xl:justify-start 2xl:space-x-0 2xl:space-y-4">
                <Heading
                    title={title}
                    styles="font-nunito text-xs font-medium capitalize tracking-wider text-stone-900 4xs:text-sm 2xs:text-base 2xl:text-lg"
                />

                <ProductPrice
                    regularPrice={regularPrice}
                    discount={discount}
                    styles={priceStyles}
                />
            </Box>
        </Box>
    );
}

export default AddedProductDetails;
