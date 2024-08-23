import supabase from './supabase';

export async function getCollection(name) {
    const { data, error } = await supabase
        .from('collections')
        .select(
            'collection:collectionName, coverImage:collectionCover(alt, src, placeholder), products(productId, image(alt, src:collectionViewSrc, placeholder:collectionViewPlaceholder))',
        )
        .eq('collectionName', name)
        .order('orderNumber', {
            foreignTable: 'products',
            ascending: true,
        });

    if (error) {
        console.error(error);
        throw new Error('Collection could not be loaded.');
    }

    const collection = data?.at(0) || null;

    return collection;
}
