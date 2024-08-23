import Heading from '../../ui/Heading';
import Link from '../../ui/Link';
import Text from '../../ui/Text';
import { usePath } from '../../hooks/usePath';
import { PATHS } from '../../utils/constants/routes';

function NewAccount() {
    const { previousPath, prevPathMatches } = usePath();

    const state = prevPathMatches(PATHS.CART) ? { previousPath } : null;

    return (
        <section className="row-span-1 row-start-1 sm:col-span-1 sm:col-start-2">
            <Heading
                title="I’m New Here"
                styles="mb-2 border-b border-studio-200 px-0.5 pb-2 text-center font-sans text-lg font-thin uppercase tracking-wider text-stone-900 3xs:mb-2.5 3xs:pb-2.5 3xs:text-xl sm:mx-1 2xl:text-2xl"
            />

            <Text
                text="Create A New account"
                styles="whitespace-nowrap px-0.5 text-center font-sans text-sm font-thin capitalize tracking-wider text-studio-200 3xs:text-base 2xl:text-lg"
            />

            <Link
                link={PATHS.SIGNUP}
                state={state}
                styles="mt-7 block w-full cursor-pointer whitespace-nowrap border border-stone-900 bg-studio-100 p-3.5 text-center font-sans text-[11px] font-light uppercase tracking-wider text-stone-900 transition-colors duration-200 ease-linear hover:bg-stone-900 hover:font-extralight hover:text-stone-50 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:font-normal active:text-studio-200 disabled:pointer-events-none disabled:cursor-default disabled:border-stone-700 disabled:text-stone-700 4xs:text-xs 3xs:text-sm 2xs:mt-9 sm:mt-[34px] sm:font-normal sm:hover:font-light sm:active:font-medium"
            >
                Sign Up
            </Link>
        </section>
    );
}

export default NewAccount;
