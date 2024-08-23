import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AccountMenu from '../menu/AccountMenu';
import BackButton from '../../ui/BackButton';
import { usePath } from '../../hooks/usePath';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { PATHS } from '../../utils/constants/routes';

function Account() {
    const [path, setPath] = useState(PATHS.HOME);

    const { previousPath } = usePath();
    const { mobileScreenWidth } = useScreenWidth();

    useEffect(() => {
        if (previousPath) setPath(previousPath);
    }, []);

    return (
        <main className="padding-inline main-section grid h-fit min-h-[299px] grid-rows-[auto_1fr] pb-10 3xs:min-h-[330px] 2xs:min-h-[346px] 2xs:pb-12 xs:min-h-[378px] xs:pb-20 sm:min-h-[610px] sm:grid-cols-[2fr_3fr] sm:gap-x-8 md:gap-x-10 lg:min-h-[614px] lg:gap-x-12 xl:min-h-[580px] xl:grid-cols-[1fr_2fr] xl:gap-x-10 xl:pb-24 2xl:min-h-[584px] 2xl:grid-cols-[1fr_3fr] 2xl:gap-x-16">
            <BackButton
                defaultPath={path}
                styles="row-span-1 row-start-1 mb-3 me-auto mt-1 flex cursor-pointer items-center space-x-0.5 py-1.5 pe-3 ps-2 font-nunito text-sm font-light uppercase tracking-wider text-stone-900 transition-all ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-1 focus:transition focus:ease-linear active:text-stone-900 3xs:mb-4 3xs:mt-2 3xs:pe-3.5 3xs:text-base sm:col-span-2 sm:col-start-1 sm:mb-6 lg:space-x-1 lg:py-2 lg:pe-4 lg:ps-2.5 2xl:ps-2 2xl:text-lg"
            />

            {!mobileScreenWidth && <AccountMenu />}

            <section className="row-span-1 row-start-2 sm:col-span-1 sm:col-start-2">
                <Outlet />
            </section>
        </main>
    );
}

export default Account;
