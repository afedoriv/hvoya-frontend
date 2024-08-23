import Link from '../../ui/Link';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import LogoutButton from '../logoutButton/LogoutButton';
import Text from '../../ui/Text';
import { usePath } from '../../hooks/usePath';
import { useSettings } from '../settings/useSettings';
import { useUser } from '../authentication/useUser';
import { generateCollectionLinks as generateLinks } from '../../utils/helpers/location';
import { toKebabCase } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

function MobileViewMenu({ onCloseWindow }) {
    const { isAuthenticated } = useUser();
    const { collections } = useSettings();
    const { state, pathIncludes, pathMatches } = usePath();

    const menu = [
        { label: 'about', path: PATHS.HOME },
        { label: 'collections', links: generateLinks(collections) },
        { label: 'shop', path: PATHS.SHOP },
        { label: 'contact', path: PATHS.CONTACT },
    ];

    const mobileMenu = isAuthenticated
        ? [...menu, { label: 'account', path: PATHS.ACCOUNT, state: state }]
        : [...menu, { label: 'sign in', path: PATHS.LOGIN, state: state }];

    const isActivePath = (path) =>
        (path === PATHS.ACCOUNT && pathIncludes(path)) || pathMatches(path);

    return (
        <nav className="h-full w-full px-2 pt-6 4xs:px-4 4xs:pt-20 3xs:px-6 2xs:px-10 2xs:pt-28">
            <List
                styles="flex flex-col items-start space-y-1 4xs:space-y-2"
                list={mobileMenu}
                render={(link) =>
                    link?.links?.length ? (
                        <ListItem
                            styles="flex flex-col space-y-1 4xs:space-y-2"
                            key={`mobile-menu-li-${toKebabCase(link.label)}`}
                        >
                            <Text
                                text={`${link.label}:`}
                                styles="w-36 cursor-default px-2.5 py-1 text-center font-nunito text-sm font-light uppercase tracking-wider text-studio-300 3xs:text-base xs:w-40 xs:py-1.5"
                            />

                            <List
                                styles="me-auto space-y-1 py-2 ps-3 4xs:space-y-2 4xs:py-3 3xs:ps-1 2xs:ps-2 xs:ps-4"
                                list={link.links}
                                render={(link) => (
                                    <ListItem
                                        styles={
                                            pathMatches(link.path)
                                                ? 'flex pointer-events-none'
                                                : 'flex'
                                        }
                                        onClick={onCloseWindow}
                                        key={`mobile-submenu-li-${toKebabCase(
                                            link.label,
                                        )}`}
                                    >
                                        <Link
                                            link={link.path}
                                            styles="w-full cursor-pointer px-2.5 py-1.5 font-nunito text-sm font-light capitalize tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 3xs:text-base 2xs:py-1 xs:py-1.5"
                                            activeStyles="text-studio-600"
                                        >
                                            {link.label}
                                        </Link>
                                    </ListItem>
                                )}
                            />
                        </ListItem>
                    ) : (
                        <ListItem
                            styles={
                                link?.links || isActivePath(link.path)
                                    ? 'flex pointer-events-none'
                                    : 'flex'
                            }
                            onClick={onCloseWindow}
                            key={`mobile-menu-li-${toKebabCase(link.label)}`}
                        >
                            <Link
                                link={link.path}
                                state={link?.state || null}
                                styles="w-36 cursor-pointer px-2.5 py-1 text-center font-nunito text-sm font-light uppercase tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 3xs:text-base xs:w-40 xs:py-1.5"
                                activeStyles="text-studio-600"
                            >
                                {link.label}
                            </Link>
                        </ListItem>
                    )
                }
            />

            {isAuthenticated && (
                <LogoutButton
                    styles="mt-1 w-36 cursor-pointer px-2.5 py-1 text-center font-nunito text-sm font-light uppercase tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 disabled:cursor-not-allowed disabled:hover:text-studio-300 4xs:mt-2 3xs:text-base xs:w-40 xs:py-1.5"
                    onClick={onCloseWindow}
                />
            )}
        </nav>
    );
}

export default MobileViewMenu;
