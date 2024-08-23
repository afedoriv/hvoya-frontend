import Box from '../../ui/Box';
import ImagePanel from '../imagePanel/ImagePanel';
import NotFound from '../notFound/NotFound';
import ProductDetails from '../productDetails/ProductDetails';
import ProductHeadings from './ProductHeadings';
import { useProduct } from './useProduct';
import { getImageList } from '../../utils/helpers/image';

function ProductInfo() {
    const { product } = useProduct();

    if (!product)
        return (
            <Box styles="col-span-full sm:row-start-2 sm:row-span-full">
                <NotFound component="product" />
            </Box>
        );

    const images = getImageList(product.image);

    return (
        <>
            <ProductHeadings />

            <ImagePanel images={images} direction="vertical" />

            <ProductDetails />
        </>
    );
}

export default ProductInfo;
