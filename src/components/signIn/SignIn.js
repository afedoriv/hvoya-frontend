import LoginForm from '../loginForm/LoginForm';
import NewAccount from './NewAccount';

function SignIn() {
    return (
        <main className="padding-inline main-section grid grid-rows-[auto_auto] gap-10 pb-10 pt-6 3xs:gap-11 2xs:gap-12 2xs:pb-12 xs:gap-14 xs:pb-20 sm:grid-cols-[1fr_1fr] sm:grid-rows-[1fr] sm:gap-6 sm:pt-8 md:gap-10 lg:gap-14 xl:gap-32 xl:pb-24 2xl:gap-44">
            <LoginForm />

            <NewAccount />
        </main>
    );
}

export default SignIn;
