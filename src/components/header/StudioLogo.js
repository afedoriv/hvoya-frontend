import Link from '../../ui/Link';
import { PATHS } from '../../utils/constants/routes';

function StudioLogo() {
    return (
        <Link
            link={PATHS.HOME}
            styles="order-1 me-auto flex aspect-square w-16 cursor-pointer items-center justify-center font-nunito text-sm font-light uppercase tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 3xs:w-20 3xs:px-1 3xs:text-base xs:px-0.5 sm:me-0 2xl:w-24 2xl:px-2 2xl:text-lg"
            activeStyles="text-studio-300"
        >
            Hvoya Pottery Co.
        </Link>
    );
}

export default StudioLogo;
