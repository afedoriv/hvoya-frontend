import { useContext } from 'react';
import Box from '../../ui/Box';
import List from '../../ui/List';
import NotFound from '../notFound/NotFound';
import Pagination from '../pagination/Pagination';
import ProductItem from './ProductItem';
import ShopOperations from './ShopOperations';
import { useProducts } from './useProducts';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';

function Products() {
    const { shopRef } = useContext(ScrollControlContext);
    const { products, count } = useProducts();

    if (!count)
        return (
            <Box styles="md:col-span-1 md:col-start-2">
                <NotFound component="products" />
            </Box>
        );

    return (
        <section
            ref={shopRef}
            className="mt-14 sm:mt-20 md:grid md:grid-cols-[fit-content_1fr] md:gap-x-6 lg:gap-x-8 xl:mt-24 xl:gap-x-12 2xl:gap-x-10 3xl:gap-x-12"
        >
            <ShopOperations />

            <List
                list={products}
                styles="grid grid-cols-[1fr] gap-y-7 2xs:grid-cols-[1fr_1fr] 2xs:gap-x-4 2xs:gap-y-8 xs:gap-x-6 sm:gap-y-9 md:col-span-1 md:col-start-2 md:gap-y-10 lg:gap-x-8 xl:gap-x-12 2xl:grid-cols-[1fr_1fr_1fr] 2xl:gap-x-10 2xl:gap-y-11 3xl:gap-x-12"
                render={(product) => (
                    <ProductItem
                        product={product}
                        key={`shop-product-${product.productId}`}
                    />
                )}
            />

            <Pagination />
        </section>
    );
}

export default Products;
