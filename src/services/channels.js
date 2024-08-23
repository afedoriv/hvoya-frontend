import supabase from './supabase';

export function subscribeToUpdates(handler) {
    const channel = supabase
        .channel('supabase-products-update')
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'products' },
            () => handler(),
        )
        .subscribe();

    return channel;
}

export function unsubscribeFromUpdates(channel) {
    if (channel) {
        supabase.removeChannel(channel);
    }
}
