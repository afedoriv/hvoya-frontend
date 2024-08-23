import { useSelector } from 'react-redux';
import Heading from '../../ui/Heading';
import ProductDescription from './ProductDescription';
import ProductOperations from './ProductOperations';
import ProductPrice from '../productPrice/ProductPrice';
import ProductProperties from '../productProperties/ProductProperties';
import { useProduct } from '../product/useProduct';
import { getProductQty } from '../../store/cartSelectors';

const priceStyles = {
    container:
        'col-span-1 mb-3.5 mt-8 flex 3xs:mb-4 3xs:mt-9 xs:mb-5 xs:mt-10 sm:col-start-2 sm:row-span-1 sm:row-start-5 sm:mb-5 sm:mt-12',
    currentPrice:
        'font-sans text-sm font-extralight tracking-wide text-studio-200 3xs:text-base xs:font-light 2xl:text-lg',
    originalPrice:
        'me-1.5 font-sans text-sm font-thin tracking-wide text-stone-500 line-through 3xs:text-base xs:font-extralight 2xl:me-2 2xl:text-lg',
};

function ProductDetails() {
    const { product } = useProduct();

    const productQty = useSelector(getProductQty(product?.productId));

    const propertyList = [
        { label: 'size', value: product?.size },
        { label: 'color', value: product?.color },
    ];

    return (
        <>
            <Heading
                title={product?.title}
                styles="col-span-1 my-6 font-nunito text-lg font-light capitalize tracking-wide text-studio-200 3xs:my-7 3xs:text-xl 2xs:mt-11 xs:mb-8 xs:mt-12 sm:col-start-2 sm:row-span-1 sm:row-start-3 sm:mb-8 sm:mt-6 2xl:text-2xl"
            />

            <ProductProperties properties={propertyList} />

            <ProductPrice
                regularPrice={product?.regularPrice}
                discount={product?.discount}
                soldOut={product?.soldOut}
                styles={priceStyles}
            />

            <ProductOperations
                addedQty={productQty}
                availableQty={product?.availableQty}
            />

            <ProductDescription list={product?.description} />
        </>
    );
}

export default ProductDetails;
