import supabase from './supabase';

export async function getUser() {
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

export async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data?.user;
}

export async function signUp({
    firstName,
    lastName,
    email,
    password,
    subscription,
    redirectUrl,
}) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { firstName, lastName, subscription },
            emailRedirectTo: redirectUrl,
        },
    });

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data?.user;
}

export async function updateUser({ firstName, lastName, password }) {
    let newUserData;

    if (firstName && lastName) newUserData = { data: { firstName, lastName } };
    if (password) newUserData = { password };

    const { data, error } = await supabase.auth.updateUser(newUserData);

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data;
}
