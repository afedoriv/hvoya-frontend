import { useNavigate } from 'react-router-dom';
import { TfiCalendar, TfiPencil, TfiSettings } from 'react-icons/tfi';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { usePath } from '../../hooks/usePath';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { useUser } from '../authentication/useUser';
import { getIconName, toKebabCase } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

const links = [
    {
        label: 'order history',
        path: PATHS.ORDERS,
        icon: <TfiCalendar />,
    },
    {
        label: 'personal information',
        path: PATHS.PROFILE_SETTINGS,
        icon: <TfiPencil />,
    },
    {
        label: 'password settings',
        path: PATHS.PASSWORD_SETTINGS,
        icon: <TfiSettings />,
    },
];

function MyAccount() {
    const navigate = useNavigate();

    const { user } = useUser();
    const { mobileScreenWidth } = useScreenWidth();
    const { state: pathState } = usePath();

    const state = mobileScreenWidth ? pathState : null;

    return (
        <>
            <Heading
                title={`Welcome, ${user?.firstName}`}
                styles="mb-4 px-0.5 pb-2 text-center font-sans text-lg font-thin capitalize tracking-wider text-stone-900 3xs:pb-2.5 3xs:text-xl sm:mb-3 sm:text-left sm:font-nunito sm:text-2xl sm:uppercase xl:mb-5 xl:mt-1 2xl:mt-2"
            />

            <List
                styles="xl:grid-flow-rows grid gap-3 4xs:gap-4 2xs:gap-5 xs:gap-6 sm:gap-5 xl:grid-cols-2 xl:gap-8 2xl:w-[88%] 2xl:gap-12"
                list={links}
                render={(link) => (
                    <ListItem
                        styles="bg-studio-400 p-3 3xs:p-4"
                        key={`account-menu-li-${toKebabCase(link.label)}`}
                    >
                        <Button
                            styles="flex h-full w-full cursor-pointer flex-col items-center justify-center space-y-3 border border-transparent bg-studio-100 p-4 transition-all ease-linear last:text-stone-900 hover:border-studio-200 hover:last:text-studio-300 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-1 focus:transition focus:ease-linear focus:hover:border-transparent active:last:text-stone-900 disabled:pointer-events-none disabled:cursor-default sm:py-5 xl:space-y-4 xl:py-7"
                            onClick={() => navigate(link.path, { state })}
                            disabled={!link.path}
                        >
                            <span
                                className="text-lg text-studio-200 xs:text-xl xl:text-2xl"
                                aria-label={getIconName(link.icon)}
                            >
                                {link.icon}
                            </span>

                            <span className="whitespace-nowrap font-sans text-[10px] font-extralight uppercase tracking-widest 3xs:text-[11px] xl:text-xs">
                                {link.label}
                            </span>
                        </Button>
                    </ListItem>
                )}
            />
        </>
    );
}

export default MyAccount;
