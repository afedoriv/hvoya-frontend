import { LiaUserSolid } from 'react-icons/lia';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Link from '../../ui/Link';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import LogoutButton from '../logoutButton/LogoutButton';
import { usePath } from '../../hooks/usePath';
import { useUser } from '../authentication/useUser';
import { toKebabCase } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

const buttonStyles =
    'z-30 cursor-pointer p-4 text-xl transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear disabled:cursor-default disabled:text-studio-300';

const userMenu = [
    { label: 'account', path: PATHS.ACCOUNT },
    { label: 'my orders', path: PATHS.ORDERS },
];
const guestMenu = [
    { label: 'create an account', path: PATHS.SIGNUP },
    { label: 'sign in', path: PATHS.LOGIN },
];

function UserMenu() {
    const { isLoadingUser, isAuthenticated } = useUser();
    const { state, pathIncludes } = usePath();

    const isActivePath = pathIncludes(PATHS.ACCOUNT);
    const menu = isAuthenticated ? userMenu : guestMenu;

    return (
        <Box styles="group/user relative order-3 flex flex-col">
            <Button
                ariaLabel="User Menu"
                styles={
                    isActivePath
                        ? `${buttonStyles} text-studio-600`
                        : `${buttonStyles} text-studio-300`
                }
                disabled={isLoadingUser}
            >
                <LiaUserSolid />
            </Button>

            <Box styles="invisible absolute left-1/2 top-full z-20 flex w-[340%] -translate-x-1/2 flex-col space-y-2 bg-studio-100 px-3 pb-4 pt-4 opacity-0 transition-all duration-300 ease-linear group-focus-within/user:visible group-focus-within/user:opacity-100 group-hover/user:visible group-hover/user:opacity-100 2xl:w-[370%] 2xl:pt-5">
                <List
                    styles="flex flex-col space-y-2"
                    list={menu}
                    render={(link) => (
                        <ListItem
                            styles="flex"
                            key={`user-menu-li-${toKebabCase(link.label)}`}
                        >
                            <Link
                                link={link.path}
                                state={state}
                                styles="w-full cursor-pointer whitespace-nowrap p-0.5 text-center font-nunito text-base font-light capitalize tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 2xl:py-1 2xl:text-lg"
                                activeStyles="text-studio-600"
                                end={true}
                            >
                                {link.label}
                            </Link>
                        </ListItem>
                    )}
                />

                {isAuthenticated && (
                    <LogoutButton styles="w-full cursor-pointer p-0.5 text-center font-nunito text-base font-light capitalize tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 disabled:cursor-default disabled:text-stone-500 disabled:hover:text-stone-400 2xl:py-1 2xl:text-lg" />
                )}
            </Box>
        </Box>
    );
}

export default UserMenu;
