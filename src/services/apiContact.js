import supabase from './supabase';

import { SUPABASE_PROJECT_URL } from '../utils/constants/config';

export async function sendMessage(message) {
    let fileName, filePath, storageError;

    const hasAnAttachment = message.file !== null;

    if (hasAnAttachment) {
        fileName = `${message.email}_${Date.now()}_${
            message.file.name
        }`.replaceAll('/', '');

        filePath = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/user-files/${fileName}`;
    }

    const { data, error } = await supabase
        .from('user-messages')
        .insert([hasAnAttachment ? { ...message, file: filePath } : message])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('Message could not be sent.');
    }

    if (hasAnAttachment) {
        const { error } = await supabase.storage
            .from('user-files')
            .upload(fileName, message.file);

        storageError = error;
    }

    if (storageError) {
        await supabase.from('user-messages').delete().eq('id', data.id);

        console.error(storageError);
        throw new Error(
            'The file could not be uploaded. Your message has not been sent.',
        );
    }

    return data;
}
