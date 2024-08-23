import supabase from './supabase';

import { RESULTS_PER_PAGE } from '../utils/constants/constants';

export async function getProduct(id) {
    const { data, error } = await supabase
        .from('products')
        .select(
            'availableQty, collection(collection:collectionName), color, discount, image(alt, src:productViewSrc, placeholder:productViewPlaceholder, altSrc:collectionViewSrc, altPlaceholder:collectionViewPlaceholder, viewOneSrc:productView1Src, viewOnePlaceholder:productView1Placeholder, viewTwoSrc:productView2Src, viewTwoPlaceholder:productView2Placeholder ), productId, regularPrice, size, title, soldOut, category, description, createdAt',
        )
        .eq('productId', id)
        .single();

    if (error) {
        console.error(error);
        throw new Error('Product not found.');
    }

    return data;
}

export async function getProducts({ filter, sorting, page }) {
    let query = supabase
        .from('products')
        .select(
            'productId, collection(collection:collectionName), title, image(alt, src:productViewSrc, placeholder:productViewPlaceholder), color, size, availableQty, regularPrice, discount, soldOut',
            {
                count: 'exact',
            },
        );

    if (filter) query = query.eq(filter.field, filter.value);

    if (sorting)
        query = query.order(`soldOut, ${sorting.field}`, {
            ascending: sorting.direction === 'ascending',
        });

    if (page) {
        const from = (page - 1) * RESULTS_PER_PAGE;
        const to = from + RESULTS_PER_PAGE - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
        console.error(error);
        throw new Error('Products could not be loaded.');
    }

    return { data, error, count };
}

export async function getProductsByIds(ids) {
    const { data, error } = await supabase
        .from('products')
        .select(
            'productId, collection(collection:collectionName), title, image(alt, src:productViewSrc, placeholder:productViewPlaceholder), color, size, availableQty, regularPrice, discount',
        )
        .in('productId', ids);

    if (error) {
        console.error(error);
        throw new Error('Products could not be loaded.');
    }

    return data;
}
