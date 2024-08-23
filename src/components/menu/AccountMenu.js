import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import LogoutButton from '../logoutButton/LogoutButton';
import { usePath } from '../../hooks/usePath';
import { toKebabCase } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

const buttonStyles =
    'cursor-pointer whitespace-nowrap px-2 py-1 font-sans text-sm capitalize tracking-wider transition-all ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:pointer-events-none disabled:cursor-default 2xl:text-[15px]';

const menuLinks = [
    { label: 'my account', path: PATHS.ACCOUNT },
    { label: 'order history', path: PATHS.ORDERS },
    { label: 'personal information', path: PATHS.PROFILE_SETTINGS },
    { label: 'password settings', path: PATHS.PASSWORD_SETTINGS },
];

function AccountMenu() {
    const navigate = useNavigate();
    const { pathMatches } = usePath();

    return (
        <section className="col-span-1 col-start-1 row-span-1 row-start-2 h-[462px] min-w-[260px] bg-studio-400 p-4 xl:h-[412px]">
            <Box styles="h-full bg-studio-100 px-6 py-8">
                <Heading
                    title="Account Menu"
                    styles="px-2 font-sans text-base font-thin capitalize tracking-wider text-stone-900 lg:text-lg"
                />

                <nav className="my-7 border-y border-studio-200 py-7">
                    <List
                        styles="flex flex-col space-y-1.5"
                        list={menuLinks}
                        render={(link) => (
                            <ListItem
                                styles="flex"
                                key={`account-menu-li-${toKebabCase(
                                    link.label,
                                )}`}
                            >
                                <Button
                                    styles={
                                        pathMatches(link.path)
                                            ? `${buttonStyles} font-light text-studio-200`
                                            : `${buttonStyles} font-thin text-stone-900`
                                    }
                                    onClick={() => navigate(link.path)}
                                    disabled={pathMatches(link.path)}
                                >
                                    {link.label}
                                </Button>
                            </ListItem>
                        )}
                    />
                </nav>

                <LogoutButton styles="cursor-pointer px-2 py-1 font-sans text-base font-thin capitalize tracking-wider text-stone-900 transition-all ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-stone-900 disabled:cursor-not-allowed lg:text-lg" />
            </Box>
        </section>
    );
}

export default AccountMenu;
