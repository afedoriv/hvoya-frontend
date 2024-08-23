import Link from '../../ui/Link';
import { getYear } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

function StudioLink() {
    const year = getYear();

    return (
        <p className="row-span-1 row-start-4 mx-auto flex md:col-span-full md:row-start-3">
            <Link
                link={PATHS.HOME}
                styles="cursor-pointer px-3 py-2 font-nunito text-[10px] font-extralight uppercase tracking-wide text-studio-200 transition-all ease-linear hover:text-studio-700 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-0 focus:transition focus:ease-linear active:text-studio-200 disabled:cursor-default disabled:text-stone-500 disabled:hover:text-stone-400 2xs:px-4 2xs:py-2.5 2xs:text-[11px] sm:px-5 sm:py-3 sm:text-xs sm:font-light"
            >
                {`${year}, Hvoya Pottery Co.`}
            </Link>
        </p>
    );
}

export default StudioLink;
