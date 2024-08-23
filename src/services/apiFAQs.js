import supabase from './supabase';

export async function getFAQs() {
    const { data, error, count } = await supabase
        .from('faqs')
        .select('number, subject, question, answer', {
            count: 'exact',
        });

    if (error) {
        console.error(error);
        throw new Error('Frequently asked questions could not be loaded.');
    }

    return { data, count };
}
