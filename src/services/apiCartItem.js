import supabase from './supabase';

export async function addCartItem(newItem) {
    const { data, error } = await supabase
        .from('user-cart-items')
        .insert([newItem])
        .select();

    if (error) {
        console.error(error);
        throw new Error('Product could not be added to the cart.');
    }

    return data;
}

export async function addCartItems(items) {
    const { error } = await supabase
        .from('user-cart-items')
        .upsert([...items], {
            onConflict: 'userId, productId',
            ignoreDuplicates: false,
        });

    if (error) {
        console.error(error);
    }

    return error;
}

export async function deleteCartItem(productId) {
    const { data, error } = await supabase
        .from('user-cart-items')
        .delete()
        .eq('productId', productId);

    if (error) {
        console.error(error);
        throw new Error('Product could not be deleted from the cart.');
    }

    return data;
}

export async function deleteCartItems(userId) {
    const { data, error } = await supabase
        .from('user-cart-items')
        .delete()
        .eq('userId', userId);

    if (error) {
        console.error(error);
        throw new Error('Products could not be deleted form the cart.');
    }

    return data;
}

export async function getCartItems() {
    const { data, error } = await supabase
        .from('user-cart-items')
        .select(
            'product:productId(availableQty, collection(collection:collectionName), color, discount, image(alt, src:collectionViewSrc, placeholder:collectionViewPlaceholder ), productId, regularPrice, size, title ), productQty',
        )
        .order('cartItemId', { ascending: true });

    if (error) {
        console.error(error);
        throw new Error('Cart products could not be loaded.');
    }

    return data;
}

export async function updateCartItem({ productId, productQty }) {
    const { data, error } = await supabase
        .from('user-cart-items')
        .update({ productQty })
        .eq('productId', productId)
        .select();

    if (error) {
        console.error(error);
        throw new Error('Product quantity could not be updated.');
    }

    return data;
}
