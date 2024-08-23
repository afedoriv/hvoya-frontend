import supabase from './supabase';

export async function subscribe(email) {
    const { data, error } = await supabase
        .from('user-subscriptions')
        .insert([email])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('Email could not be added to the mailing list.');
    }

    return data;
}

export async function unsubscribe(email) {
    const { error } = await supabase
        .from('user-subscriptions')
        .delete()
        .eq('email', email);

    if (error) {
        console.error(error);
        throw new Error('Email could not be deleted from the mailing list.');
    }
}
