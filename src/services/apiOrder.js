import supabase from './supabase';

export async function getOrders() {
    const { data, error } = await supabase
        .from('orders')
        .select(
            'date:createdAt, number:orderNumber, products:orderId(product:productId(image(alt, src:productViewSrc, placeholder:productViewPlaceholder), productId), productQty), status:orderStatus, total:totalAmount',
        )
        .order('createdAt', { ascending: false });

    if (error) {
        console.error(error);
        throw new Error('Orders could not be loaded.');
    }

    return data;
}
